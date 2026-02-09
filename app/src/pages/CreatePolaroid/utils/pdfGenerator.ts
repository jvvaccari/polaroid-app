import html2pdf from "html2pdf.js";

interface PdfGeneratorOptions {
  textContent: string;
  onError: (message: string) => void;
}

// SVG pattern para simular o radial-gradient (html2canvas não renderiza gradientes CSS)
const createSvgPattern = (): string => {
  const svgPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <circle cx="10" cy="10" r="1.4" fill="rgba(61, 59, 59, 0.08)"/>
    </svg>
  `;
  return encodeURIComponent(svgPattern.trim());
};

// Cria um overlay com o pattern de pontos
const createPatternOverlay = (
  encodedSvg: string,
  position: { top?: string; right?: string; bottom?: string; left?: string },
  size: { width: string; height: string }
): HTMLDivElement => {
  const overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.top = position.top ?? 'auto';
  overlay.style.right = position.right ?? 'auto';
  overlay.style.bottom = position.bottom ?? 'auto';
  overlay.style.left = position.left ?? 'auto';
  overlay.style.width = size.width;
  overlay.style.height = size.height;
  overlay.style.backgroundImage = `url("data:image/svg+xml,${encodedSvg}")`;
  overlay.style.backgroundSize = '20px 20px';
  overlay.style.backgroundRepeat = 'repeat';
  overlay.style.pointerEvents = 'none';
  return overlay;
};

// Aplica estilos base nos clones das polaroids
const applyCloneStyles = (clone: HTMLElement, rect: DOMRect): void => {
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;
  clone.style.minWidth = `${rect.width}px`;
  clone.style.minHeight = `${rect.height}px`;
  clone.style.maxWidth = `${rect.width}px`;
  clone.style.maxHeight = `${rect.height}px`;
  clone.style.flexShrink = '0';
  clone.style.backgroundColor = "#fff";
  clone.style.border = '0.6px solid #212529';
  clone.style.overflow = 'visible';
};

// Aplica o pattern de pontos no back
const applyBackPattern = (backClone: HTMLElement, encodedSvg: string): void => {
  backClone.style.backgroundImage = `url("data:image/svg+xml,${encodedSvg}")`;
  backClone.style.backgroundSize = '20px 20px';
  backClone.style.backgroundRepeat = 'repeat';
};

// Aplica o pattern de pontos nas bordas do front (sem cobrir a foto)
const applyFrontPattern = (frontClone: HTMLElement, encodedSvg: string): void => {
  frontClone.style.position = 'relative';
  
  // Padding do CardCover: 24px 24px 72px 24px
  const overlays = [
    // Borda superior (24px)
    { position: { top: '0', right: '0', left: '0' }, size: { width: '100%', height: '24px' } },
    // Borda esquerda (24px)
    { position: { top: '24px', bottom: '72px', left: '0' }, size: { width: '24px', height: 'calc(100% - 96px)' } },
    // Borda direita (24px)
    { position: { top: '24px', right: '0', bottom: '72px' }, size: { width: '24px', height: 'calc(100% - 96px)' } },
    // Borda inferior (72px)
    { position: { right: '0', bottom: '0', left: '0' }, size: { width: '100%', height: '72px' } },
  ];

  overlays.forEach(({ position, size }) => {
    frontClone.appendChild(createPatternOverlay(encodedSvg, position, size));
  });
};

// Substitui o TextField do MUI por texto simples
const replaceTextFieldWithText = (backClone: HTMLElement, textContent: string): void => {
  const textField = backClone.querySelector('textarea');
  if (!textField) return;

  const textDiv = document.createElement('div');
  textDiv.style.padding = '0';
  textDiv.style.fontFamily = 'Roboto, Arial, sans-serif';
  textDiv.style.fontSize = '16px';
  textDiv.style.color = '#1e1e1e';
  textDiv.style.whiteSpace = 'pre-wrap';
  textDiv.style.wordBreak = 'break-word';
  textDiv.textContent = textContent;

  const fieldWrapper = textField.closest('.MuiFormControl-root') || textField.parentElement;
  if (fieldWrapper?.parentElement) {
    fieldWrapper.parentElement.replaceChild(textDiv, fieldWrapper);
  }
};

// Cria o container do PDF
const createPdfContainer = (): HTMLDivElement => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.gap = '40px';
  container.style.padding = '40px';
  container.style.width = '297mm';
  container.style.height = '210mm';
  container.style.backgroundColor = '#ffffff';
  container.style.boxSizing = 'border-box';
  return container;
};

// Configurações do html2pdf
const getPdfOptions = () => ({
  margin: 0,
  filename: 'polaroid.pdf',
  image: { type: 'png' as const, quality: 1 },
  html2canvas: {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
  },
  jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'landscape' as const },
});

// Função principal para gerar o PDF
export const generatePolaroidPdf = ({ textContent, onError }: PdfGeneratorOptions): void => {
  const front = document.getElementById('polaroid-front');
  const back = document.getElementById('polaroid-back');

  if (!front || !back) {
    onError("Não foi possível encontrar as duas faces da polaroid");
    return;
  }

  const rect = front.getBoundingClientRect();
  const encodedSvg = createSvgPattern();

  const frontClone = front.cloneNode(true) as HTMLElement;
  const backClone = back.cloneNode(true) as HTMLElement;

  // Aplicar estilos
  [frontClone, backClone].forEach((clone) => applyCloneStyles(clone, rect));

  // Aplicar patterns
  applyBackPattern(backClone, encodedSvg);
  applyFrontPattern(frontClone, encodedSvg);

  // Esconder elementos de edição
  frontClone.querySelectorAll('.hide-on-capture').forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });

  // Substituir TextField por texto
  replaceTextFieldWithText(backClone, textContent);

  // Montar e gerar PDF
  const container = createPdfContainer();
  container.appendChild(frontClone);
  container.appendChild(backClone);

  html2pdf().set(getPdfOptions()).from(container).save();
};
