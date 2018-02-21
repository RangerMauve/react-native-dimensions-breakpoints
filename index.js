import {Dimensions} from "react-native";

var sizes = {};

export default {
	smallerThan: smallerThan,
	largerThan: largerThan,
	configure: configure
};

function configure(newSizes) {
	sizes =  newSizes;
	return sizes;
}

function smallerThan(name){
	return smallerDimension() < getSize(name);
}

function largerThan(name) {
	return smallerDimension() > getSize(name);
}

function getSize(name) {
	return name in sizes ? sizes[name] : 0;
}

function smallerDimension(){
	var window = Dimensions.get("window");
	return Math.min(window.width, window.height);
}