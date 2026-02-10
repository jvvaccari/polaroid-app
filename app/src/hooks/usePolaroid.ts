import { useMutation, useQuery } from "@tanstack/react-query";
import { polaroidService } from "../services";

/**
 * Hook para buscar uma polaroid por ID.
 *
 * O TanStack Query cuida automaticamente de:
 * - Estado de loading (`isPending`)
 * - Estado de erro (`isError`, `error`)
 * - Cache (não refaz a requisição se já tem os dados)
 * - Refetch automático quando a janela volta ao foco
 */
export function usePolaroidById(id: string | undefined) {
  return useQuery({
    // queryKey: identificador único do cache.
    // Se o `id` mudar, o TanStack refaz a requisição automaticamente.
    queryKey: ["polaroid", id],

    // queryFn: a função que busca os dados (deve retornar uma Promise).
    queryFn: () => polaroidService.getPolaroidById(id!),

    // enabled: só executa a query se o `id` existir.
    // Evita chamadas desnecessárias quando o id é undefined.
    enabled: !!id,
  });
}

/**
 * Hook para buscar todas as polaroids.
 */
export function usePolaroids() {
  return useQuery({
    queryKey: ["polaroids"],
    queryFn: () => polaroidService.getAllPolaroids(),
  });
}

/**
 * Hook para criar uma polaroid.
 *
 * useMutation é diferente de useQuery:
 * - Não executa automaticamente, você dispara com mutate(dados)
 * - mutationFn recebe os dados que você passa ao chamar mutate()
 * - Use onSuccess para invalidar o cache e forçar refetch das queries relacionadas
 */
export function useCreatePolaroid() {
  return useMutation({
    mutationFn: (data: FormData) => polaroidService.createPolaroid(data),
  });
}
