export const showsWithSetlist = (shows) => {
  return shows
    .edges
    .map((s) => s.node)
    .filter((s) => s.frontmatter.setlist)
};

export const showsBySong = (shows, songs) => {
  return showsWithSetlist(shows)
  .reduce((songs, show) => {
    (show.frontmatter.setlist || []).map((song) => {
      if(!songs[song]) { songs[song] = [] }
      songs[song].push(show.fields.date)
    });
    return songs;
  }, {});
}

export const showsWithSong = (shows, song) => {
  return shows
    .edges
    .filter((show) => show.node.frontmatter.setlist)
    .filter((show) => show.node.frontmatter.setlist.includes(song));
}
