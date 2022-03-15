import { shallowMount } from "@vue/test-utils";
import { Mutations } from '~/store/Countdown/types';

import { setupLocalVueStore } from '~/store/helper';

import Countdown from './Countdown.vue';
import CountdownDigits from '~/components/atoms/CountdownDigits.vue';

