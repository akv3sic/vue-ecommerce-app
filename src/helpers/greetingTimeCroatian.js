export function getGreeting() {
    const date = new Date()
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      return "Dobro jutro";
    } else if (hour >= 12 && hour < 17) {
      return "Dobar dan";
    } else if ((hour >= 17 && hour <= 23) || hour < 5) {
      return "Dobra večer";
    }
  }