import mixpanel from 'mixpanel-browser';

class MixpanelService {
  static instance;

  static get() {
    if (!this.instance) {
      this.instance = new MixpanelService();

      mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
        protocol: 'https'
      });
    }
  }

  /**
   * Checks if mixpanel is active
   */
  static isActive() {
    // eslint-disable-next-line no-underscore-dangle
    return mixpanel && mixpanel.__loaded && mixpanel.get_distinct_id();
  }

  /**
   * Track mixpanel requests
   */
  static track(eventName, eventProperties) {
    const filteredProperties = {};

    Object.keys(eventProperties).forEach((keys) => {
      if (typeof eventProperties[keys] !== 'undefined' || eventProperties[keys] !== '') {
        filteredProperties[keys] = eventProperties[keys];
      }
    });

    if (MixpanelService.isActive()) {
      mixpanel.track(eventName, filteredProperties);
    } else {
      // mixpanel is not initialized
      setTimeout(() => {
        this.track(eventName, eventProperties);
      });
    }
  }
}

export default MixpanelService;
