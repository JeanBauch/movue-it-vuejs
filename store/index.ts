import { Mutations } from './Challenges/types';

export const actions = {
	nuxtServerInit ({ commit }: any, { app }: any) {
		const cookie = app.$cookiz.get('movueit');

		if (cookie) {
			commit(`Challenges/${Mutations.SAVE_COOOKIE_DATA}`, cookie);
		};
	},
};
