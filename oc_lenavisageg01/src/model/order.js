const Services = {
  man: {
    cut: {
      name: "Střih",
      price: 100
    },
    care: {
      name: "Péče",
      price: 50
    }
  },
  child: {
    cut: {
      name: "Střih",
      price: {
        short: 60,
        long: 100
      }
    },
    care: {
      name: "Péče",
      price: 200
    }
  },
  woman: {
    cut: {
      name: "Střih",
      price: {
        short: 200,
        middle: 200,
        long: 200
      }
    },
    care: {
      name: "Péče",
      price: {
        short: 150,
        middle: 200,
        long: 250
      }
    },
    melodies: {
      name: "Melíry",
      price: {
        short: 200,
        middle: 270,
        long: 400
      },
      unit: {
        volume: 30,
        price: 60
      }
    },
    hairSpray: {
      name: "Přeliv",
      price: {
        short: 200,
        middle: 230,
        long: 250
      },
      unit: {
        volume: 15,
        price: 60
      }
    },
    color: {
      name: "Barva",
      price: {
        short: 200,
        middle: 230,
        long: 250
      },
      unit: {
        volume: 15,
        price: 40
      }
    },
    duoMelodies: {
      name: "Duo - Melíry",
      price: {
        short: 260,
        middle: 300,
        long: 350
      },
      unit: {
        volume: 30,
        price: 60
      }
    },
    duoColor: {
      name: "Duo - Barva",
      price: {
        short: 0,
        middle: 0,
        long: 0
      },
      unit: {
        volume: 15,
        price: 40
      }
    },
    bondUltim: {
      name: "Bond Ultim",
      unit: {
        volume: 4,
        price: 250
      }
    }
  }
};
/*
* řasy - nové 850,- doplnění 500,-
* společenský účes 600,-
* líčení 600,-
* svatba
*   balíček 3200
*   účes 1300
*   líčení 1300
*   zkouška 500
* svatebčané
*   účes 500
*   úprava vlasů 350
*   líčení 350
* cesťák 6
* */
export const wedding = {
  name: "Svatba",
  date: "Datum",
  category: {
    bride: {
      name: "Nevěsta",
      type: {
        package: {
          name: "Balíček",
          price: 3200
        },
        hairstyle: {
          name: "Účes",
          price: 1300
        },
        hairstyleExam: {
          name: "Účes + zkouška",
          price: 1800
        },
        makeup: {
          name: "Líčení",
          price: 1300
        },
        makeupExam: {
          name: "Líčení + zkouška",
          price: 1800
        }
      }
    },
    guest: {
      name: "Host",
      type: {
        hairstyle: {
          name: "Účes",
          price: 500
        },
        hairstyleMin: {
          name: "Úprava vlasů",
          price: 350
        },
        makeup: {
          name: "Líčení",
          price: 350
        }
      }
    },
    journey: {
      name: "Cesta",
      price: 6,
      unit: "km"
    }
  }
};

export const eyelash = {
  name: "Řasy",
  type: {
    new: {
      name: "Nové",
      price: 850
    },
    renewal: {
      name: "Doplnění",
      price: 500
    }
  }
};

export const socialEvent = {
  name: "Společenská akce",
  type: {
    hairstyle: {
      name: "Účes",
      price: 600
    },
    makeup: {
      name: "Líčení",
      price: 600
    }
  }
};

export const NAMES = {
  woman: "Žena",
  man: "Muž",
  child: "Dítě"
};

const HAIR = {
  men: null,
  child: {
    short: "Krátké",
    long: "Dlouhé"
  },
  woman: {
    short: "Krátké",
    middle: "Střední",
    long: "Dlouhé"
  }
};

export class Service {
  constructor(key, attrs, hair) {
    this.key = key;
    this.price = typeof attrs.price === "object" ? attrs.price[hair] : (attrs.price || 0);
    this.name = attrs.name;
    this.hair = hair;

    if (attrs.unit) {
      this.unit = attrs.unit.volume;
      this.unitPrice = attrs.unit.price;
    }
  }

  setQuantity(quantity) {
    if (quantity) {
      this.quantity = quantity;
    }
    return this;
  }

  getQuantity() {
    return this.quantity;
  }

  getSummary() {
    let serviceData = { code: this.key, sum: this.price };
    if (this.quantity) {
      serviceData.quantity = this.quantity;
      serviceData.unit = this.unit;
      serviceData.price = this.price;
      serviceData.sum += this.quantity * this.unitPrice;
    }
    return serviceData;
  }
}

class Order {
  constructor(data = {}) {
    this.category = null;
    this.hair = null;
    this.eyelash = null;
    this.services = [];
    this.socialEvents = [];

    this.customer = data.customer;

    // wedding
    this.weddingDate = data.weddingDate ? new Date(data.weddingDate) : undefined;
    this.annotation = data.desc;
    this.id = data.id;
    this.deposit = data.deposit || 0;
    this.brideType = data.bride ? data.bride.code : undefined;

    if (data.guests) {
      this.guests = data.guests.map(guest => {
        const newGuest = {};
        for (let k in guest) {
          newGuest[k] = true;
        }
        return newGuest;
      });
    }
  }

  setCategory(category) {
    this.category = category;
    return this;
  }

  getCategory() {
    return this.category;
  }

  getCategoryName() {
    return NAMES[this.category];
  }

  setHair(hair) {
    this.hair = hair;
    return this;
  }

  getHair() {
    return this.hair;
  }

  getHairName() {
    return HAIR[this.category] ? HAIR[this.category][this.hair] : undefined;
  }

  addService(serviceKey) {
    let service = new Service(serviceKey, Services[this.category][serviceKey], this.hair);
    this.services.push(service);
    return this;
  }

  removeService(serviceKey) {
    let index = this.services.findIndex(service => service.key === serviceKey);
    if (index > -1) {
      let service = this.services[index];
      this.services.splice(index, 1);
      return service;
    }
    return null;
  }

  clearServices() {
    this.services.length = 0;
    return this;
  }

  getService(serviceKey) {
    return this.services.find(service => service.key === serviceKey);
  }

  listServices() {
    let services = [...this.services];

    if (this.getEyelash()) {
      services.push({
        key: "eyelash",
        name: `${eyelash.name} - ${this.getEyelashName().toLowerCase()}`,
        price: this.getEyelashPrice()
      });
    }

    if (this.brideType) {
      services.push({
        key: "bride",
        name: `${wedding.category.bride.name} - ${wedding.category.bride.type[this.brideType].name.toLowerCase()}`,
        price: wedding.category.bride.type[this.brideType].price
      });
    }

    if (this.guests) {
      let guests = {};
      this.guests.forEach(guest => {
        Object.keys(guest).forEach(key => {
          if (guest[key]) {
            guests[key] = guests[key] || 0;
            guests[key] += 1;
          }
        })
      });

      Object.keys(guests).forEach(key => services.push({
        key: `guest-${key}`,
        name: `${wedding.category.guest.name} - ${wedding.category.guest.type[key].name.toLowerCase()} (${guests[key]}x)`,
        price: wedding.category.guest.type[key].price * guests[key]
      }));
    }

    if (this.socialEvents.length) {
      this.socialEvents.forEach(key => services.push({
        key: `socialEvent-${key}`,
        name: socialEvent.type[key].name,
        price: socialEvent.type[key].price
      }));
    }

    return services;
  }

  hasService(serviceKey) {
    return !!this.getService(serviceKey);
  }

  getServiceItems() {
    return Services[this.category];
  }

  getHairItems() {
    return HAIR[this.category];
  }

  getSummary() {
    let data = {};

    let category = this.getCategory();
    if (category) {
      data.category = category;
    }

    if (this.hair) {
      data.hair = this.getHair();
    }

    let sum = 0;

    if (this.services.length) {
      data.services = [];

      this.services.forEach(service => {
        let serviceSummary = service.getSummary();
        data.services.push(serviceSummary);
        sum += serviceSummary.sum;
      });
    }

    if (this.getEyelash()) {
      data.eyelash = {
        code: this.getEyelash(),
        sum: eyelash.type[this.getEyelash()].price
      };
      sum += data.eyelash.sum;
    }

    if (this.brideType) {
      data.bride = {
        code: this.brideType,
        sum: wedding.category.bride.type[this.brideType].price
      };
      sum += data.bride.sum;
    }

    if (this.guests) {
      let guests = [];
      this.guests.forEach(guest => {
        let guestData = {};
        Object.keys(guest).forEach(key => {
          if (guest[key]) {
            guestData[key] = wedding.category.guest.type[key].price;
            sum += guestData[key];
          }
        });
        if (Object.keys(guestData).length) guests.push(guestData);
      });

      if (Object.keys(guests).length) data.guests = guests;
    }

    if (this.socialEvents.length) {
      data.socialEvents = this.socialEvents.map(key => {
        let price = socialEvent.type[key].price;
        sum += price;
        return { code: key, sum: price };
      });
    }

    data.sum = sum;

    if (this.weddingDate) data.weddingDate = this.weddingDate.toISOString();
    if (this.annotation) data.desc = this.annotation;
    if (this.customer) data.customer = this.customer;
    if (this.deposit) data.deposit = this.deposit;
    if (this.id) data.id = this.id;

    return data;
  }

  setId(id) {
    this.id = id;
  }

  setAnnotation(annotation) {
    this.annotation = annotation;
  }

  getAnnotation() {
    return this.annotation;
  }

  getTitle() {
    let title;

    if (this.getCategory()) {
      title = this.getCategoryName();
      if (this.getHairName()) title += ` - ${this.getHairName().toLowerCase()} vlasy`;
    } else if (this.getEyelash()) {
      title = `${eyelash.name} - ${this.getEyelashName()}`;
    } else if (this.brideType || this.guests) {
      title = wedding.name;
    } else if (this.socialEvents.length) {
      title = socialEvent.name;
    }

    return title;
  }

  setEyelash(eyelash) {
    this.eyelash = eyelash;
    return this;
  }

  getEyelash() {
    return this.eyelash;
  }

  getEyelashName() {
    return this.eyelash ? eyelash.type[this.eyelash].name : "";
  }

  getEyelashPrice() {
    return this.eyelash ? eyelash.type[this.eyelash].price : "";
  }

  setBrideType(type) {
    this.brideType = type;
    return this;
  }

  getBrideType() {
    return this.brideType;
  }

  setGuests(guests) {
    this.guests = guests;
    return this;
  }

  getGuests() {
    return this.guests;
  }

  toggleSocialEvent(key) {
    let index = this.socialEvents.indexOf(key);
    if (index > -1) {
      this.socialEvents.splice(index, 1);
    } else {
      this.socialEvents.push(key);
    }
    return this;
  }

  getSocialEvents() {
    return this.socialEvents;
  }

  setWeddingDate(weddingDate) {
    this.weddingDate = weddingDate;
  }

  getWeddingDate() {
    return this.weddingDate;
  }

  setCustomer(customer) {
    this.customer = customer;
  }

  getCustomer() {
    return this.customer;
  }

  setDeposit(deposit) {
    this.deposit = deposit;
  }

  getDeposit() {
    return this.deposit;
  }
}

export default Order;
