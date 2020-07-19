export default {
    'Full-Leaf Brewed Tea': {
        name: 'Full-Leaf Brewed Tea',
        description: "From the British classic afternoon tea to the Chinese tea ceremony, the tradition of sipping on a relaxing cup of tea is celebrated all over the world. We offer 8 amazing blends of full-leaf teas, made with the world's most delicious teas and botanicals.",
        group: 'Teas',
        options: [
            {
                name: 'Milk',
                type: 'radio',
                values: ['Fresh Milk', 'Low Fat Milk', 'Soymilk', 'Almond Milk', 'Hazelnut Milk'],
            },
            {
                name: 'Sweetener',
                type: 'radio',
                values: ['sugar syrup', 'french vanilla', 'caramel', 'hazelnut']
            },
            {
                name: 'Sugar Level',
                type: 'radio',
                values: ['0%', '25%', '50%', '100%']
            },
        ]
    },
    'Tea Latte': {
        name: 'Tea Latte',
        description: "A frothy reinvention of the favorite latte. Savor your latte with the bright lavender notes of Earl Grey tea or sip on a malty English Breakfast Tea Latte, made from a select brand of rich teas from India and Sri Lanka.",
        group: 'Teas',
        options: [
            {
                name: 'Milk',
                type: 'radio',
                values: ['Fresh Milk', 'Low Fat Milk', 'Soymilk', 'Almond Milk', 'Hazelnut Milk'],
            },
            {
                name: 'Sweetener',
                type: 'radio',
                values: ['sugar syrup', 'french vanilla', 'caramel', 'hazelnut']
            },
            {
                name: 'Sugar Level',
                type: 'radio',
                values: ['0%', '25%', '50%', '100%']
            }
        ]
    },
    'Pure Matcha Tea Latte': {
        name: 'Pure Matcha Tea Latte',
        description: "Meet the Pure Matcha Tea Latte – a smooth, creamy and lightly sweetened beverage that's made from premium microground matcha and served with steamed milk. Available hot and iced and you can opt to have yours unsweetened too.",
        group: 'Teas',
        options: [
            {
                name: 'Milk',
                type: 'radio',
                values: ['Fresh Milk', 'Low Fat Milk', 'Soymilk', 'Almond Milk', 'Hazelnut Milk'],
            },
            {
                name: 'Sweetener',
                type: 'radio',
                values: ['sugar syrup', 'french vanilla', 'caramel', 'hazelnut']
            },
            {
                name: 'Sugar Level',
                type: 'radio',
                values: ['0%', '25%', '50%', '100%']
            }
        ]
    },
    'Americano': {
        name: 'Americano',
        description: '',
        group: 'Coffees',
        options: [
            {
                name: 'Milk',
                type: 'radio',
                values: ['Fresh Milk', 'Low Fat Milk', 'Soymilk', 'Almond Milk', 'Hazelnut Milk'],
            },
            {
                name: 'Sweetener',
                type: 'radio',
                values: ['sugar syrup', 'french vanilla', 'caramel', 'hazelnut']
            },
            {
                name: 'Sugar Level',
                type: 'radio',
                values: ['0%', '25%', '50%', '100%']
            },
            {
                name: 'Shots',
                type: 'radio',
                values: ['single', 'double']
            }
        ]
    }
};