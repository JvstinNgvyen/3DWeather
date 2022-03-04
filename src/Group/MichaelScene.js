import * as entry from "../script";
import * as WeatherHelper from "../WeatherAPI";
export function Initalize(scene, camera, canvas) {
    console.log(WeatherHelper.WeatherData)
    entry.RegisterOnSceneUpdate(OnSceneUpdate);
}
var currentTime = 0
const maxTime = 500;
function OnSceneUpdate(deltaTime) {
    currentTime += deltaTime;
    if (currentTime >= maxTime) {
        // dostuff;
        currentTime = 0;
    }
}