import { mount } from '@vue/test-utils';

import CountdownDigits from './CountdownDigits.vue';

describe('Components: Atoms: CountdownDigits', () => {
	describe('Snapshots', () => {
		it('Should match snapshot', () => {
			const wrapper = mount(CountdownDigits, {
				propsData: {
					digits: 10,
				},
			});

			expect(wrapper.html()).toMatchSnapshot();
		});
	});
});
