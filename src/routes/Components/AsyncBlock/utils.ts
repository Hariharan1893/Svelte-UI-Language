export async function roll(): Promise<number> {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // 30% chance to fail to demonstrate the {:catch} block

            if (Math.random() < 0.3) {

                reject(new Error("Dice fell off the table!"));

            } else {

                resolve(Math.floor(Math.random() * 6) + 1);

            }

        }, 1000);

    });
  }