export interface Humidity {
    id: number;
    value: number;
    humidityAlert: {
        alertLevel: string,
        recommendedHumidity: string,
        recommendationMessage: string
    };
  }
  