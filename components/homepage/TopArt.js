const TopArt = ({artworks}) => {
    return (
        <div>
            {artworks && artworks.data.map((art, i) => (
                <p key={i}>{art.title}</p>
            )) }
        </div>
    )
}

export default TopArt
