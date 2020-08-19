import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { inputTips } from './tips/TipDataProvider.js';
import { TipList } from './tips/TipList.js';
import { nameLocation } from './locations/LocationDataProvider.js';
import { LocationList } from './locations/LocationList.js';

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList();

const allTheTips = inputTips()

for (const tip of allTheTips) {
    console.log(tip)
}

TipList();

const allThePlaces = nameLocation()

for (const loc of allThePlaces) {
    console.log(loc)
}

LocationList();