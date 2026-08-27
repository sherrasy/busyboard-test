import { Step } from 'react-joyride';

export interface TourConfig {
  id: string;
  steps: Step[];
  continuous?: boolean;
}
