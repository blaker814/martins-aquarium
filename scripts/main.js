import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { inputTips } from './tips/TipDataProvider.js';
import { TipList } from './tips/TipList.js';
import { nameLocation } from './locations/LocationDataProvider.js';
import { LocationList } from './locations/LocationList.js';

const allTheFish = useFish()
allTheFish.map(fish => console.log(fish))
FishList();

const allTheTips = inputTips()
allTheTips.map(tip => console.log(tip))
TipList();

const allThePlaces = nameLocation()
allThePlaces.map(place => console.log(place))
LocationList();