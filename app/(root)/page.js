"use client";
import AlbumCard from "@/components/cards/album";
import SongCard from "@/components/cards/song";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { getSongsByQuery, searchAlbumByQuery } from "@/lib/fetch";
import { useEffect, useState } from "react";

export default function Page() {
  const [latest, setLatest] = useState([]);
  const [popular, setPopular] = useState([]);
  const [albums, setAlbums] = useState([]);
  const genres = ['american-trap', 'amapiano', 'american-hip-hop', 'lekompo', 'rap', 'mzansi-deep-house'];

  const getSongs = async (e, type) => {
    if (genres.includes(e)) {
      const get = await getSongsByQuery(e);
      const data = await get.json();
      if (type === "latest") {
        setLatest(data.data.results);
      } else if (type === "popular") {
        setPopular(data.data.results);
      }
    }
  };

  const getAlbum = async () => {
    const get = await searchAlbumByQuery("american-hip-hop/trap");
    const data = await get.json();
    setAlbums(data.data.results);
  };

  useEffect(() => {
    getSongs("amapiano", "latest");
    getSongs("american-hip-hop", "latest");
    getSongs("american-rap", "latest");
    getSongs("american-trap", "latest");
    getAlbum();
    getSongs("lekompo", "popular");
  }, []);

  return (
    <main className="px-6 py-5 md:px-20 lg:px-32">
      <div>
        <h1 className="text-base">Songs</h1>
        <p className="text-xs text-muted-foreground">Top new released songs.</p>
        <ScrollArea className="rounded-md mt-4">
          <div className="flex gap-4">
            {latest.length ? latest.slice().reverse().map((song) => (
              <SongCard key={song.id} image={song.image[2].url} album={song.album} title={song.name} artist={song.artists.primary[0].name} id={song.id} />
            )) : (
              <>
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
              </>
            )}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>
      <div className="mt-14">
        <h1 className="text-base">Albums</h1>
        <p className="text-xs text-muted-foreground">Top new released albums.</p>
        <ScrollArea className="rounded-md mt-6">
          <div className="flex gap-4">
            {albums.length ? albums.slice().reverse().map((song) => (
              <AlbumCard key={song.id} lang={song.language} image={song.image[2].url} album={song.album} title={song.name} artist={song.artists.primary[0].name} id={`album/${song.id}`} />
            )) : (
              <>
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
              </>
            )}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>
      <div className="mt-12">
        <h1 className="text-base">Trending</h1>
        <p className="text-xs text-muted-foreground">Most played songs in this week.</p>
        <ScrollArea className="rounded-md mt-6">
          <div className="flex gap-4">
            {popular.length ? popular.map((song) => (
              <SongCard key={song.id} id={song.id} image={song.image[2].url} title={song.name} artist={song.artists.primary[0].name} />
            )) : (
              <>
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
              </>
            )}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>
    </main>
  );
}