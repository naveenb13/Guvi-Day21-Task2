async function searchResult() {
    try {
        let searchValue = document.getElementById("value1").value;
        console.log(searchValue);
        let res = await fetch(
            `https://anapioficeandfire.com/api/characters?name=${searchValue}`
        );
        let res1 = await res.json();
        console.log(res1.length);
        console.log(res1);

        if (res1.length == 0) {
            document.getElementById(`cardShow0`).style.display = "flex";
            document.getElementById(`cardShow1`).style.display = "none";
            document.getElementById(`cardShow2`).style.display = "none";
            document.getElementById(`cardShow3`).style.display = "none";

            document.getElementById("name0").innerHTML = `<h1>Your Character Search does not belong to the Family of GOT</h1>`;
            document.getElementById("born0").innerText = "Nil";
            document.getElementById("gender0").innerText = "Nil";
            document.getElementById("playedBy0").innerText = "Nil";
            document.getElementById("titles0").innerText = "Nil";
            document.getElementById("appearedOn0").innerText = "Nil";
        } else if (res1.length == 1) {
            for (let i = 0; i < res1.length; i++) {
                document.getElementById(`cardShow0`).style.display = "flex";
                document.getElementById(`cardShow1`).style.display = "none";
                document.getElementById(`cardShow2`).style.display = "none";
                document.getElementById(`cardShow3`).style.display = "none";

                if (res1[i].name != "") {
                    document.getElementById(
                        `name${i}`
                    ).innerHTML = `<h1>${res1[i].name}</h1>`;
                } else {
                    document.getElementById(`name${i}`).innerHTML = "Nil";
                }

                if (res1[i].born != "") {
                    document.getElementById(`born${i}`).innerText = `${res1[i].born}`;
                } else {
                    document.getElementById(`born${i}`).innerText = "Nil";
                }

                if (res1[i].gender != "") {
                    document.getElementById(`gender${i}`).innerText = `${res1[i].gender}`;
                } else {
                    document.getElementById(`gender${i}`).innerText = "Nil";
                }

                if (res1[i].playedBy != "") {
                    document.getElementById(
                        `playedBy${i}`
                    ).innerText = `${res1[i].playedBy}`;
                } else {
                    document.getElementById(`playedBy${i}`).innerText = "Nil";
                }

                if (res1[i].titles != "") {
                    document.getElementById(`titles${i}`).innerText = `${res1[i].titles}`;
                } else {
                    document.getElementById(`titles${i}`).innerText = "Nil";
                }

                if (res1[i].tvSeries != "") {
                    document.getElementById(
                        `appearedOn${i}`
                    ).innerText = `${res1[i].tvSeries}`;
                } else {
                    document.getElementById(`appearedOn${i}`).innerText = "Nil";
                }
            }
        } else if (res1.length == 2) {
            for (let i = 0; i < res1.length; i++) {
                document.getElementById(`cardShow0`).style.display = "flex";
                document.getElementById(`cardShow1`).style.display = "flex";
                document.getElementById(`cardShow2`).style.display = "none";
                document.getElementById(`cardShow3`).style.display = "none";

                if (res1[i].name != "") {
                    document.getElementById(
                        `name${i}`
                    ).innerHTML = `<h1>${res1[i].name}</h1>`;
                } else {
                    document.getElementById(`name${i}`).innerHTML = "Nil";
                }

                if (res1[i].born != "") {
                    document.getElementById(`born${i}`).innerText = `${res1[i].born}`;
                } else {
                    document.getElementById(`born${i}`).innerText = "Nil";
                }

                if (res1[i].gender != "") {
                    document.getElementById(`gender${i}`).innerText = `${res1[i].gender}`;
                } else {
                    document.getElementById(`gender${i}`).innerText = "Nil";
                }

                if (res1[i].playedBy != "") {
                    document.getElementById(
                        `playedBy${i}`
                    ).innerText = `${res1[i].playedBy}`;
                } else {
                    document.getElementById(`playedBy${i}`).innerText = "Nil";
                }

                if (res1[i].titles != "") {
                    document.getElementById(`titles${i}`).innerText = `${res1[i].titles}`;
                } else {
                    document.getElementById(`titles${i}`).innerText = "Nil";
                }

                if (res1[i].tvSeries != "") {
                    document.getElementById(
                        `appearedOn${i}`
                    ).innerText = `${res1[i].tvSeries}`;
                } else {
                    document.getElementById(`appearedOn${i}`).innerText = "Nil";
                }
            }
        } else if (res1.length == 3) {
            for (let i = 0; i < res1.length; i++) {
                document.getElementById(`cardShow0`).style.display = "flex";
                document.getElementById(`cardShow1`).style.display = "flex";
                document.getElementById(`cardShow2`).style.display = "flex";
                document.getElementById(`cardShow3`).style.display = "none";

                if (res1[i].name != "") {
                    document.getElementById(
                        `name${i}`
                    ).innerHTML = `<h1>${res1[i].name}</h1>`;
                } else {
                    document.getElementById(`name${i}`).innerHTML = "Nil";
                }

                if (res1[i].born != "") {
                    document.getElementById(`born${i}`).innerText = `${res1[i].born}`;
                } else {
                    document.getElementById(`born${i}`).innerText = "Nil";
                }

                if (res1[i].gender != "") {
                    document.getElementById(`gender${i}`).innerText = `${res1[i].gender}`;
                } else {
                    document.getElementById(`gender${i}`).innerText = "Nil";
                }

                if (res1[i].playedBy != "") {
                    document.getElementById(
                        `playedBy${i}`
                    ).innerText = `${res1[i].playedBy}`;
                } else {
                    document.getElementById(`playedBy${i}`).innerText = "Nil";
                }

                if (res1[i].titles != "") {
                    document.getElementById(`titles${i}`).innerText = `${res1[i].titles}`;
                } else {
                    document.getElementById(`titles${i}`).innerText = "Nil";
                }

                if (res1[i].tvSeries != "") {
                    document.getElementById(
                        `appearedOn${i}`
                    ).innerText = `${res1[i].tvSeries}`;
                } else {
                    document.getElementById(`appearedOn${i}`).innerText = "Nil";
                }
            }
        } else {
            for (let i = 0; i < res1.length; i++) {
                document.getElementById(`cardShow0`).style.display = "flex";
                document.getElementById(`cardShow1`).style.display = "flex";
                document.getElementById(`cardShow2`).style.display = "flex";
                document.getElementById(`cardShow3`).style.display = "flex";

                if (res1[i].name != "") {
                    document.getElementById(
                        `name${i}`
                    ).innerHTML = `<h1>${res1[i].name}</h1>`;
                } else {
                    document.getElementById(`name${i}`).innerHTML = "Nil";
                }

                if (res1[i].born != "") {
                    document.getElementById(`born${i}`).innerText = `${res1[i].born}`;
                } else {
                    document.getElementById(`born${i}`).innerText = "Nil";
                }

                if (res1[i].gender != "") {
                    document.getElementById(`gender${i}`).innerText = `${res1[i].gender}`;
                } else {
                    document.getElementById(`gender${i}`).innerText = "Nil";
                }

                if (res1[i].playedBy != "") {
                    document.getElementById(
                        `playedBy${i}`
                    ).innerText = `${res1[i].playedBy}`;
                } else {
                    document.getElementById(`playedBy${i}`).innerText = "Nil";
                }

                if (res1[i].titles != "") {
                    document.getElementById(`titles${i}`).innerText = `${res1[i].titles}`;
                } else {
                    document.getElementById(`titles${i}`).innerText = "Nil";
                }

                if (res1[i].tvSeries != "") {
                    document.getElementById(
                        `appearedOn${i}`
                    ).innerText = `${res1[i].tvSeries}`;
                } else {
                    document.getElementById(`appearedOn${i}`).innerText = "Nil";
                }
            }
        }
    } catch (error) {
        console.log(error);
        document.getElementById("cardShow0").style.display = "flex";
        document.getElementById("name0").innerHTML = `<h1>Your Character Search does not belong to the Family of GOT</h1>`;
        document.getElementById("born0").innerText = "Nil";
        document.getElementById("gender0").innerText = "Nil";
        document.getElementById("playedBy0").innerText = "Nil";
        document.getElementById("titles0").innerText = "Nil";
        document.getElementById("appearedOn0").innerText = "Nil";
    }
}
