import { defineStore } from "pinia"
import type { TProduct } from "@/types/TProduct";

type State = {
    products: TProduct[]
}

export const productStore = defineStore({
    id: 'store',
    state: (): State => {
        return {
            products: [
                {
                    id: 1,
                    name: 'LED.B - беспроводная светодиодная полимеризационная лампа | Woodpecker',
                    description: 'Лампы LED-технологий (LED-Light Emitting Diodes) в настоящее время считаются наиболее перспективным направлением совершенствования приборов для фотополимеризации и обеспечивают всё, что ожидается от этой новой технологии, и новейшая разработка объединяет в себе мощность, эффективность и скорость: Для отверждения композитный материал используется активная энергия светового луча лампы, проходящего сквозь него, в импульсном режиме.<br> Интенсивность светового потока (1000-1700 мВт/см2) значительно превосходит мощность большинства галогенных ламп, при этом он почти так же эффективен как плазменные лампы, но не выделяет тепло. LED-В Woodpecker может быть использована для реставрации и отбеливания зубов.',
                    price: 4600,
                    image: '/images/img.png'
                },
                {
                    id: 2,
                    name: 'Tosi TX-164 - турбинный наконечник с генератором света, для 4-х канального соединения | Tosi Foshan',
                    description: 'Компания TOSI FOSHAN MEDICAL EQUIPMENT является разработчиком и производителем исключительно стоматологических наконечников. В связи с этим качество производимой продукции отличается высоким уровнем. Качество всей продукции TOSI подтверждено Международной организацией по стандартизации. Все наконечники TOSI получили сертификат и соответствуют стандартам ISO.',
                    price: 7100,
                    image: '/images/img_1.png'
                },
                {
                    id: 3,
                    name: 'AirPex - портативный апекслокатор с беспроводной зарядкой | Eighteeth',
                    description: 'AirPex - миниатюрный беспроводной апекслокатор последнего поколения.',
                    price: 25000,
                    image: '/images/img_2.png'
                },
                {
                    id: 4,
                    name: 'LM-Arte Complete Set - набор инструментов для реставрационных работ | LM-Instruments Oy',
                    description: '<b>LM-Arte Complete Set</b> – это набор инструментов для реставрационных работ. Инструменты были разработаны группой стоматологов Style Italiano, специализирующихся на эстетической стоматологии. Инструменты LM-Arte специально разработаны для послойной техники работы с композиционными материалами.</br> Каждый прибор имеет цветовую маркировку и название, определяющее его основную функцию. Легкая и эргономичная конструкция рукоятки в сочетании с высококачественными материалами наконечника обеспечивает комфорт в работе для достижения наилучших клинических результатов.',
                    price: 49870,
                    image: '/images/img_3.png'
                },
            ],
        }
    },
    getters: {
        //функция получения информации о всех продуктах
        allProducts({products}): TProduct[] {
            return products
        },
        //функция получения одного продукта по его ID
        getProductById({products}): (id: number) => TProduct | undefined {
            return (id: number): TProduct | undefined => {
                return products.find((product) => product.id === id)
            }
        }
    }
});