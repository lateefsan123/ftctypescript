const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID;
const clientSecret = import.meta.env.VITE_TWITCH_CLIENT_SECRET;

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }),
  });

  const data = await res.json();
  return data.access_token;
}

async function checkStreamerLive(
  streamerName: string,
  button: HTMLElement,
  token: string
): Promise<void> {
  try {
    const url = `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(streamerName)}`;
    const res = await fetch(url, {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data.data && data.data.length > 0) {
      console.log(`${streamerName} is live`);

      const container = button.closest('.streamerpiece, .labberpiece') as HTMLElement | null;
      const indicator = container?.querySelector('.islive') as HTMLElement | null;

      if (indicator) {
        indicator.style.display = 'flex';
      }

      button.classList.add('fa-bounce');
    }
  } catch (err) {
    console.error(`Error checking ${streamerName}:`, err);
  }
}

export async function init(): Promise<void> {
  const token = await getAccessToken();
  const buttons = document.querySelectorAll<HTMLElement>('.livebuttonn');

  buttons.forEach((button) => {
    const streamerName = button.getAttribute('data-streamer');
    if (streamerName) {
      checkStreamerLive(streamerName, button, token);
    }
  });
}
