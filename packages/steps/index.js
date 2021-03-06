import { create } from '../common/create';

create({
  props: {
    icon: String,
    steps: {
      type: Array,
      observer: 'formatSteps'
    },
    active: {
      type: Number,
      observer: 'formatSteps'
    },
    direction: {
      type: String,
      value: 'horizontal'
    },
    activeColor: {
      type: String,
      value: '#06bf04'
    }
  },

  attached() {
    this.formatSteps();
  },

  methods: {
    formatSteps() {
      const { steps } = this.data;
      const formattedSteps = steps.map((step, index) => {
        return {
          ...step,
          status: this.getStatus(index)
        };
      });

      this.setData({
        formattedSteps
      });
    },

    getStatus(index) {
      const { active } = this.data;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }

      return '';
    }
  }
});
