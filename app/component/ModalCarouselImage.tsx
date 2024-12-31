import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Modal, Image } from "antd";

type ModalCarouselImageType = {
  imageList: string[];
  openModal: boolean;
  handleClose: () => void;
};
export const ModalCarouselImage = ({
  imageList,
  openModal,
  handleClose,
}: ModalCarouselImageType) => {
  // Custom Arrow Components for Carousel
  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return <LeftOutlined className={className} onClick={onClick} />;
  };

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return <RightOutlined className={className} onClick={onClick} />;
  };
  return (
    <Modal
      open={openModal}
      footer={null}
      onCancel={handleClose}
      centered
      destroyOnClose
      mask={true}
      styles={{
        body: {
          padding: 0,
          background: "transparent",
        },
      }}
    >
      {imageList.length > 0 && (
        <Carousel
          arrows
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          dotPosition="bottom"
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight
        >
          {imageList.map((photo) => (
            <Image
              key={photo}
              src={`/photos/${photo}`}
              alt={`Photo of ${photo}`}
              preview={false}
            />
          ))}
        </Carousel>
      )}
    </Modal>
  );
};
