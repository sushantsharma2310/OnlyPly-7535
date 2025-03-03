import Mux from '@mux/mux-node';

const { Video } = new Mux(
  process.env.VITE_MUX_ACCESS_TOKEN,
  process.env.VITE_MUX_SECRET_KEY
);

export const createLiveStream = async () => {
  try {
    const liveStream = await Video.LiveStreams.create({
      playback_policy: "public",
      new_asset_settings: { playback_policy: "public" }
    });
    
    return {
      streamKey: liveStream.stream_key,
      streamUrl: liveStream.rtmp.url,
      playbackId: liveStream.playback_ids[0].id
    };
  } catch (error) {
    console.error('Failed to create live stream:', error);
    throw error;
  }
};

export const createAsset = async (input) => {
  try {
    const asset = await Video.Assets.create({
      input,
      playback_policy: 'public',
      mp4_support: 'standard'
    });
    
    return {
      assetId: asset.id,
      playbackId: asset.playback_ids[0].id
    };
  } catch (error) {
    console.error('Failed to create asset:', error);
    throw error;
  }
};