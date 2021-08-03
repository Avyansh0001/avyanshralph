var url = "https://api.lanyard.rest/v1/users/745308305160667137"; // URL of API
fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var discordStatusHTML = document.getElementById("discordStatus_socials");
      var status = `${
        data.data.active_on_discord_desktop
          ? data.data.activities[0].emoji.name +
            ` ${data.data.activities[0].state
              .split("", 20)
              .reduce(
                (o, c) => (o.length === 19 ? `${o}${c}...` : `${o}${c}`),
                ""
              )}`
          : "Supraaaa#2338"
      }`;
      discordStatusHTML.innerHTML += status;
    });
  } else {
    console.log("Response failed?");
  }
});
