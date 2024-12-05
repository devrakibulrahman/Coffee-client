
const ImgCard = ({card}) => {
    return (
        <div className="w-full h-[350px] overflow-hidden rounded-[10px]">
            <img src={card.img} alt="card img" className="w-full object-cover" />
        </div>
    );
};

export default ImgCard;