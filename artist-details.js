function changeArtist(artistName) {
  const artistDetails = getArtistDetails(artistName);
  const artistDetailsList = document.getElementById("artist-details-list");
  const reasonElement = document.getElementById("reason");
  const artistDetailsDiv = document.querySelector(".artist-details");

  gsap.to(".details-list li, .reason,.streaming-links", {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.15,
    onComplete: () => {
      document.getElementById(
        "artist-name"
      ).innerText = `Favorite Artist: ${artistName}`;
      artistDetailsList.innerHTML = "";
      artistDetails.forEach((detail) => {
        const li = document.createElement("li");
        li.innerHTML = detail;
        artistDetailsList.appendChild(li);
      });
      reasonElement.innerHTML = `<p><strong>Reason for Liking:</strong> ${getReason(
        artistName
      )}</p>`;

      // Update streaming links
      const spotifyLink = document.getElementById("spotify-link");
      const appleMusicLink = document.getElementById("apple-music-link");
      const youtubeLink = document.getElementById("youtube-link");

      spotifyLink.href = getSpotifyLink(artistName);
      appleMusicLink.href = getAppleMusicLink(artistName);
      youtubeLink.href = getYoutubeLink(artistName);

      gsap.to(".details-list li, .reason,.streaming-links", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.15,
      });
    },
  });
}

function getArtistDetails(artistName) {
  const artistDetailsMap = {
    "CAT BURNS": [
      "<strong>Genre:</strong> Pop",
      "<strong>Albums:</strong> Unknown",
      '<strong>Popular Songs:</strong> "Grey"',
    ],
    ASAKE: [
      "<strong>Genre:</strong> Afrobeat",
      '<strong>Albums:</strong> "Omo Ope", "Lavida", "Money In The Bank"',
      '<strong>Popular Songs:</strong> "Sungba", "Don’t Hype Me"',
    ],
    "BNXN F.K.A BUJU": [
      "<strong>Genre:</strong> Afrobeats",
      '<strong>Albums:</strong> "Love Won"',
      '<strong>Popular Songs:</strong> "Lenu (Remix)", "So Lovely"',
    ],
    "DWIN THE STOIC": [
      "<strong>Genre:</strong> Hip Hop",
      '<strong>Albums:</strong> "Heavy Heart" (EP)',
      '<strong>Popular Songs:</strong> "SOS"',
    ],
    "BAABA J": [
      "<strong>Genre:</strong> Afrobeat,Soul",
      '<strong>Albums:</strong> "Okay Baby,Let`s do it "',
      '<strong>Popular Songs:</strong> "Wonderful", "Ole"',
    ],
    ASA: [
      "<strong>Genre:</strong> Afrobeat, Soul",
      '<strong>Albums:</strong> "Asa", "Beautiful Imperfection"',
      '<strong>Popular Songs:</strong> "Jailer", "Fire on the Mountain"',
    ],
    JOEBOY: [
      "<strong>Genre:</strong> Afrobeat, R&B",
      '<strong>Albums:</strong> "Love and Light"',
      '<strong>Popular Songs:</strong> "Baby", "Beginning"',
    ],
    ZINOLEENSKY: [
      "<strong>Genre:</strong> Afrobeat, Rap",
      "<strong>Albums:</strong> Grit&Lust",
      '<strong>Popular Songs:</strong> "Mapariwo", "Kilofeshe"',
    ],
    TENI: [
      "<strong>Genre:</strong> Afrobeat, Pop",
      '<strong>Albums:</strong> "Billionaire (EP)", "Wondaland"',
      '<strong>Popular Songs:</strong> "Case", "Billionaire"',
    ],
    // Add more artists and their details here if needed
  };

  return artistDetailsMap[artistName] || [];
}

function getReason(artistName) {
  const artistReasonMap = {
    "CAT BURNS":
      "Cat Burns music resonates with me because of her unique voice and emotional lyrics.",
    ASAKE:
      "Asake's vibrant Afrobeat tunes and catchy melodies always lift my mood.",
    "BNXN F.K.A BUJU":
      "Bnxn f.k.a Buju brings a fresh vibe to Afrobeats with his smooth vocals and relatable lyrics.",
    "DWIN THE STOIC":
      "Dwin The Stoic's introspective lyrics and laid-back delivery make his music deeply captivating.",
    "BAABA J":
      "Baaba J's lyrics and sound just resonates with me, because she turns her feelings into sound ",
    ASA: "Asa's soulful voice and meaningful lyrics have a timeless quality that I love.",
    JOEBOY:
      "Joeboy's romantic melodies and heartfelt lyrics resonate with me on a personal level.",
    ZINOLEENSKY:
      "Zinoleesky's unique blend of Afrobeat and rap creates a fresh sound that I can't get enough of.",
    TENI: "Teni's playful personality shines through in her music, making every song a joy to listen to.",
    // Add more artists and their reasons here if needed
  };

  return artistReasonMap[artistName] || "";
}

// Helper functions to get streaming links
function getSpotifyLink(artistName) {
  const spotifyLinks = {
    "CAT BURNS":
      "https://open.spotify.com/artist/6WFDpw4u23uSpon4BHvFRn?si=gNwYAQKaTnyJt-St9YZA4Q",
    ASAKE:
      "https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg?si=z3vRzf4ZS020iRJDDBWcDA",
    "BNXN F.K.A BUJU":
      "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x?si=xvE3FNKgQga9GQIPdz--Fw",
    "DWIN THE STOIC":
      "https://open.spotify.com/artist/4G4MrV1YIxHLGXRlhrIPmC?si=F5MhZvCcQOyXzpRPncx6hQ",
    "BAABA J":
      "https://open.spotify.com/artist/151OS9nfrfYQ8UlnakRMek?si=t9TTWLslQYGksFSoR6nydg",
    ASA: "https://open.spotify.com/artist/0upXUo04k4k8bGVSkmgrSc?si=3bCNyICATZ6Z8WUeFV54Yw",
    JOEBOY:
      "https://open.spotify.com/artist/1XavfPKBpNjkOfxHINlMHF?si=jaaW1w8JR9qE6pSBNRBgkQ",
    ZINOLEENSKY:
      "https://open.spotify.com/artist/6Kp3KWPiVgi33DkJqo9T4g?si=k4CbLusuR_K8JicGSdJDHA",
    TENI: "https://open.spotify.com/artist/3ukrG1BmfEiuo0KDj8YTTS?si=shjOOIuqTCeQgVD44DFXzw",
  };
  return spotifyLinks[artistName] || "#";
}

function getAppleMusicLink(artistName) {
  const appleMusicLinks = {
    "CAT BURNS": "https://music.apple.com/ng/artist/cat-burns/1154970833",
    ASAKE: "https://music.apple.com/ng/artist/asake/1436064480",
    "BNXN F.K.A BUJU": "https://music.apple.com/ng/artist/bnxn/1347142581",
    "DWIN THE STOIC":
      "https://music.apple.com/ng/artist/dwin-the-stoic/1344738412",
    "BAABA J": "https://music.apple.com/ng/artist/baaba-j/1527846612",
    ASA: "https://music.apple.com/ng/artist/a%E1%B9%A3a/26089928",
    JOEBOY: "https://music.apple.com/ng/artist/joeboy/1202620452",
    ZINOLEENSKY: "https://music.apple.com/ng/artist/zinoleesky/1464018453",
    TENI: "https://music.apple.com/ng/artist/teni/575029243",
  };
  return appleMusicLinks[artistName] || "#";
}

function getYoutubeLink(artistName) {
  const youtubeLinks = {
    "CAT BURNS": "https://www.youtube.com/@CatBurns",
    ASAKE: "https://www.youtube.com/@ASAKEMUSIC",
    "BNXN F.K.A BUJU": "https://www.youtube.com/@BnxnTYE",
    "DWIN THE STOIC": "https://www.youtube.com/@DwinTheStoicYT",
    "BAABA J": "https://www.youtube.com/@baabaj",
    ASA: "https://www.youtube.com/channel/UCROf-FwSDPDXA6NyL2tlDPw",
    JOEBOY: "https://www.youtube.com/channel/UCv3EFZRGITcQwdyCE_ap0UA",
    ZINOLEENSKY: "https://www.youtube.com/channel/UChIrS2dMwWHj3cWAUv8Tl8Q",
    TENI: "https://www.youtube.com/@tenientertainer_SMG",
  };
  return youtubeLinks[artistName] || "#";
}
