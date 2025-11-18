import { useQuery } from '@tanstack/react-query';
import { dailyChallengeService } from '../../services';

export const queryKeyDailyChallenge = ['dailyChallenge'];

export function useGetDailyChallenge() {
    return useQuery({
        queryKey: queryKeyDailyChallenge,
        queryFn: () => dailyChallengeService.getDailyChallenge(),
    });
}
