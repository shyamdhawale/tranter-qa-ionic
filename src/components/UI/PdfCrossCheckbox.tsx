import React from "react";

// import custom components since there was typescript error
import { Svg, Path, G } from "./PdfSvgPathCustom";

const PdfCrossCheckbox: React.FC = () => (
  <Svg style={{ width: "24", height: "24" }}>
    <G>
      <Path
        d="M17.66 21.81H6.34C5.24466 21.81 4.19417 21.3749 3.41965 20.6004C2.64512 19.8258 2.21 18.7753 2.21 17.68V6.36C2.21 5.26466 2.64512 4.21418 3.41965 3.43965C4.19417 2.66513 5.24466 2.23 6.34 2.23H17.66C18.7553 2.23 19.8058 2.66513 20.5803 3.43965C21.3549 4.21418 21.79 5.26466 21.79 6.36V17.68C21.79 18.7753 21.3549 19.8258 20.5803 20.6004C19.8058 21.3749 18.7553 21.81 17.66 21.81ZM6.34 3.73C5.64248 3.73 4.97353 4.00709 4.48031 4.50031C3.98709 4.99353 3.71 5.66248 3.71 6.36V17.68C3.71 18.3775 3.98709 19.0465 4.48031 19.5397C4.97353 20.0329 5.64248 20.31 6.34 20.31H17.66C18.3575 20.31 19.0265 20.0329 19.5197 19.5397C20.0129 19.0465 20.29 18.3775 20.29 17.68V6.36C20.29 5.66248 20.0129 4.99353 19.5197 4.50031C19.0265 4.00709 18.3575 3.73 17.66 3.73H6.34Z"
        fill="black"
      />
      <Path
        d="M15.76 16.64C15.6614 16.641 15.5636 16.6221 15.4725 16.5843C15.3814 16.5465 15.2989 16.4906 15.23 16.42L7.58 8.77001C7.50631 8.70134 7.44721 8.61854 7.40622 8.52654C7.36523 8.43455 7.34318 8.33523 7.34141 8.23453C7.33963 8.13383 7.35815 8.0338 7.39588 7.94041C7.4336 7.84702 7.48974 7.76219 7.56096 7.69097C7.63218 7.61975 7.71701 7.56361 7.8104 7.52588C7.90379 7.48816 8.00382 7.46964 8.10452 7.47141C8.20522 7.47319 8.30454 7.49523 8.39654 7.53623C8.48854 7.57722 8.57134 7.63632 8.64 7.71001L16.29 15.36C16.4304 15.5006 16.5093 15.6913 16.5093 15.89C16.5093 16.0888 16.4304 16.2794 16.29 16.42C16.2208 16.4901 16.1382 16.5457 16.0472 16.5835C15.9562 16.6213 15.8585 16.6405 15.76 16.64Z"
        fill="black"
      />
      <Path
        d="M8.19 16.56C8.09121 16.5622 7.99304 16.5438 7.90178 16.5059C7.81052 16.468 7.72817 16.4115 7.66 16.34C7.58924 16.2711 7.53301 16.1886 7.49461 16.0976C7.45621 16.0066 7.43643 15.9088 7.43643 15.81C7.43643 15.7112 7.45621 15.6134 7.49461 15.5224C7.53301 15.4314 7.58924 15.3489 7.66 15.28L15.31 7.63C15.4506 7.48955 15.6412 7.41066 15.84 7.41066C16.0387 7.41066 16.2294 7.48955 16.37 7.63C16.5087 7.77357 16.5862 7.96538 16.5862 8.165C16.5862 8.36462 16.5087 8.55643 16.37 8.7L8.72 16.34C8.65075 16.4101 8.5682 16.4657 8.47719 16.5035C8.38618 16.5412 8.28854 16.5605 8.19 16.56Z"
        fill="black"
      />
    </G>
  </Svg>
);
export default PdfCrossCheckbox;