import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Bird from "./components/Bird";
import Obstacles from "./components/Obstacles";

export default function App() {
  const screenWidth = Dimensions.get("screen").width; // width  : 411
  const screenHeight = Dimensions.get("screen").height; // height : 891
  const birdLeft = screenWidth / 2; // bird position center horizontal
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2); //  bird in the middle of the screen vertical
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth + 30);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2 + 60
  );
  const [obstaclesNegativeHeight, setObstaclesNegativeHeight] = useState(0);
  const [obstaclesNegativeHeightTwo, setObstaclesNegativeHeightTwo] =
    useState(0);
  const obstacleWidth = 60;
  const obstacleHeight = 400;
  const gap = 200; // obstacles open space
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdTwo;
  // make bird fall down
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity); // as long as birdBottom is more than zero , screenheight loses 3 px
      }, 30); // every 30ms bird falls down
      return () => {
        clearInterval(gameTimerId);
      };
    }
  }, [birdBottom]);

  // obstacle spawning
  useEffect(() => {
    /* -obstacleWidth makes it so that the obstacles will leave the screen */
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5); //moves obstacles to left every 30ms with 5px
      }, 30); //every 30ms
      return () => {
        clearInterval(obstaclesLeftTimerId);
      };
      /* loop to spawn another obstacle if the first one left the screen */
    } else {
      setObstaclesLeft(screenWidth);
      setObstaclesNegativeHeight(-Math.random() * 100);
    }
  }, [obstaclesLeft]);

  // second obstacle spawning
  useEffect(() => {
    /* -obstacleWidth makes it so that the obstacles will leave the screen */
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 5); //moves obstacles to left every 30ms with 5px
      }, 30); //every 30ms
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo);
      };
      /* loop to spawn another obstacle if the first one left the screen */
    } else {
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegativeHeightTwo(-Math.random() * 100);
    }
  }, [obstaclesLeftTwo]);

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />

      <Obstacles
        color={"green"}
        obstaclesLeft={obstaclesLeft}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        randomBottom={obstaclesNegativeHeight}
      />

      <Obstacles
        color={"red"}
        obstaclesLeft={obstaclesLeftTwo}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        randomBottom={obstaclesNegativeHeightTwo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
