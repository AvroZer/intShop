import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Смартфоны" },
            { id: 2, name: "Ноутбуки" },
            { id: 3, name: "Фотоаппараты" },
            { id: 4, name: "Мыши" },
            { id: 5, name: "Клавиатуры" },
            { id: 6, name: "Микрофоны" },
            { id: 7, name: "Телевизоры" },
        ];
        this._brands = [
            { id: 1, name: "Apple" },
            { id: 2, name: "Samsung" },
            { id: 3, name: "Xiaomi" },
        ];
        this._devices = [
            {
                id: 1,
                name: "iPhone 15 Pro Max",
                price: 204990,
                img: `https://istudio-kazan.ru/a/istudio/files/multifile/2353/15pro_natural_40.webp`,
            },
            {
                id: 2,
                name: "iPhone 15 Plus",
                price: 93599,
                img: `https://istudio-kazan.ru/a/istudio/files/multifile/2353/15_yellow_17.webp`,
            },
            {
                id: 3,
                name: "iPhone 15",
                price: 83299,
                img: `https://istudio-kazan.ru/a/istudio/files/multifile/2353/15_black.webp`,
            },
            {
                id: 4,
                name: "iPhone 15 Pro",
                price: 107699,
                img: `https://istudio-kazan.ru/a/istudio/files/multifile/2353/15pro_white.webp`,
            },
            {
                id: 5,
                name: "iPhone 14 Pro Max",
                price: 104899,
                img: `https://istudio-kazan.ru/a/istudio/files/multifile/2353/4_62_1_0.webp`,
            },
            {
                id: 6,
                name: "iPhone 14 Pro",
                price: 98299,
                img: `https://istudio-kazan.ru/a/istudio/files/multifile/2353/3_54__1_.webp`,
            },   
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}
