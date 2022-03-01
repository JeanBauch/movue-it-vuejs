import { MutationTree } from 'vuex';

export interface XP {
	current: number;
	start: number;
	end: number;
}

export interface Challenge {
	type: string;
	description: string;
	amount: number;
}

export interface Cookie {
	level: number;
	xp: XP;
	completedChallenges: number;
}

export interface State {
	level: number;
	xp: XP;
	completedChallenges: number;
	currentChallengesIndex: number | null;
	isLevelUpModalOpen: boolean;
	allChallenges: Challenge[];
}

export interface Getters {
	challengesLength: (state: State) => number;
	currentXpPercentage: (state: State) => number;
	currentChallenge: (state: State) => Challenge | null;
}

export enum Mutations {
	SET_CURRENT_CHALLENGE_INDEX = 'SET_CURRENT_CHALLENGE_INDEX',
	SET_IS_LEVEL_UP_MODAL_UP = 'SET_IS_LEVEL_UP_MODAL_UP',
	COMPLETE_CHALLENGE = 'COMPLETE_CHALLENGE',
	SAVE_COOOKIE_DATA = 'SAVE_COOOKIE_DATA',
}

export type RootSate = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootSate> {
	[Mutations.SET_CURRENT_CHALLENGE_INDEX](s: State, p: number): void;
	[Mutations.SET_IS_LEVEL_UP_MODAL_UP](s: State, p: boolean): void;
	[Mutations.COMPLETE_CHALLENGE](s: State, p: number): void;
	[Mutations.SAVE_COOOKIE_DATA](s: State, p: Cookie): void;
}
