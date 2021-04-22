export const newsSources = {
    coinMarket: {
        url: 'https://coinmarketcap.com/headlines/news/',
        name: 'coinMarket',
        type: 'json',
        parser: (data) => {
            const jsonData = JSON.parse(data)
                .map((e) => { return { title: e['meta']['title'], description: e['meta']['desctiption'] }; });
            return jsonData !== null && jsonData !== void 0 ? jsonData : [];
        }
    }
};
