// function songs(arrWithSongs) {

//     class Song {
//         constructor(typeList, name, time) {
//             this.typeList = typeList;
//             this.name = name;
//             this.time = time;
//         }
//     }

//     let numberOfSongs = Number(arrWithSongs.shift());
//     let listForPrint = arrWithSongs.pop();

//     for (let list of arrWithSongs) {
//         let [typeList, name, time] = list.split('_'); // ['favourite', 'DownTown', '3:14'],['favourite', 'Kiss', '4:16'],['favourite', 'Smooth Criminal', '4:01']
//         let song = new Song(typeList, name, time);
//         if (listForPrint === 'all') {
//             console.log(song.name);
//         }
//         if (song.typeList === listForPrint) {
//             console.log(song.name);
//         }
//     }
// }
// songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
// songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater'])
// songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])



function songs(arrWithSongs) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = Number(arrWithSongs.shift());
    let typeSong = arrWithSongs.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = arrWithSongs[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filterList = songs.filter((i) => i.typeList === typeSong);
        filterList.forEach((i) => console.log(i.name));
    }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater'])
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])