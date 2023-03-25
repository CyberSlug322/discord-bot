export async function euBotSeller(lotsDB: any) {
    try {
        const inventary = await axios.get('https://market.csgo.com/api/v2/my-inventory/?key=2KPPGgHh2YEgP3L0h382Y6B5Ml7EFK3')
        const newArray = await inventary.items.map( (lot: any) => {
            lotsDB.forEach((obj: any) => {
                if (lot.id === obj.id)
            })
        });

    } catch (error) {
        console.error(error);
    }
};