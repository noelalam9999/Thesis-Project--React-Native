import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import coin from '../../../assets/image/coin3.png';
import sport5 from '../../../assets/image/sport5.jpg';

const LeaderboardScreen = () => {
  const [isTodaySelected, setIsTodaySelected] = useState(true);

  return (
    <LinearGradient
      colors={['#FE8577', '#FFBE6D']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        position: 'relative',
      }}>
      <View>
        <Image source={sport5} />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 10,
          paddingHorizontal: 20,
        }}>
        <Text>{isTodaySelected ? 'Today' : 'Week'}</Text>
        <Switch
          value={isTodaySelected}
          onValueChange={(value) => setIsTodaySelected(value)}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          height: 300,
          bottom: -10,
          left: 20,
          //   right: 20,
          backgroundColor: 'white',
          width: '90%',
          borderRadius: 10,
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            // flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>4</Text>
          <View>
            <Text>D.vas</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={coin}
              style={{ width: 20, height: 20, marginRight: 5 }}
            />
            <Text>8682</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>4</Text>
          <View>
            <Text>D.vas</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={coin}
              style={{ width: 20, height: 20, marginRight: 5 }}
            />
            <Text>8682</Text>
          </View>
        </View>
        <View
          style={{
            // flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>4</Text>
          <View>
            <Text>D.vas</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={coin}
              style={{ width: 20, height: 20, marginRight: 5 }}
            />
            <Text>8682</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
// const LeaderboardScreen = () => {
//   const renderLeaderboardEntry = (data, index) => {
//     return (
//       <View style={styles.leaderboardEntry} key={index}>
//         <Text style={styles.rank}>{data.rank}</Text>
//         <Image source={data.avatar} style={styles.avatar} />
//         <Text style={styles.username}>{data.username}</Text>
//         <Text style={styles.score}>{data.score}</Text>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>LEADERBOARD</Text>
//       </View>
//       <View>
//         {leaderboardData.map((data, index) =>
//           renderLeaderboardEntry(data, index)
//         )}
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     width: "100%",
//   },
//   title: {
//     fontSize: 20,

//     color: "#fff",
//   },
//   leaderboardEntry: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#fff",
//     width: "100%",
//   },
//   rank: {
//     fontSize: 24,

//     color: "black",
//     marginRight: 16,
//     width: 30,
//     textAlign: "center",
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   username: {
//     flex: 1,
//     fontSize: 18,

//     color: "black",
//     marginRight: 16,
//   },
//   score: {
//     fontSize: 16,

//     color: "#A3AEB9",
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  leaderboardEntries: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  leaderboardEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  rankIconContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    position: 'relative',
  },
  rank: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  username: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    marginLeft: 16,
  },
  score: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LeaderboardScreen;
