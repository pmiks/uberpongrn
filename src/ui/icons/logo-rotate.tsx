import React, { FC } from 'react'
import { View, ViewStyle } from 'react-native'
import Svg, {
  G,
  Path,
  Stop,
  LinearGradient,
  Rect,
  Defs,
  RadialGradient,
  ClipPath,
  Filter,
  FeFlood,
  FeBlend,
  FeGaussianBlur,
} from 'react-native-svg'

interface Props {
  style?: ViewStyle
  color?: string
  opacity?: number
  width?: number
  height?: number
}

export const SvgLogoRotate: FC<Props> = ({ style, color, opacity }) => (
  <View pointerEvents='none' style={{ ...style, opacity }}>
    <Svg width='86' height='425' viewBox='0 0 86 425' fill='none'>
      <G clip-path='url(#clip0)'>
        <G opacity='0.3' filter='url(#filter0_f)'>
          <Path
            opacity='0.3'
            d='M70.9633 348.867C71.4496 349.045 66.0268 361.355 58.8514 376.362C51.6761 391.369 45.4646 403.391 44.9782 403.214C44.4919 403.036 49.9147 390.726 57.0901 375.719C64.2654 360.712 70.4769 348.69 70.9633 348.867Z'
            fill='url(#paint0_linear)'
          />
        </G>
        <Path
          opacity='0.5'
          d='M65.7376 368.234C66.5887 368.544 65.4777 372.562 63.2561 377.209C61.0345 381.855 58.5435 385.37 57.6924 385.06C56.8412 384.749 57.9522 380.731 60.1738 376.085C62.3954 371.438 64.8864 367.923 65.7376 368.234Z'
          fill='url(#paint1_radial)'
        />
        <Path
          d='M55.9091 373.042C55.9091 373.042 52.8557 366.839 53.6172 363.729C54.1141 361.7 57.8299 358.707 57.8299 358.707L53.2051 354.473C53.2051 354.473 49.1533 356.773 46.8464 356.937C43.0735 357.204 35.8753 354.421 35.8753 354.421L55.9087 373.042L55.9091 373.042Z'
          fill='url(#paint2_linear)'
        />
        <Path
          d='M53.6332 362.86L51.5091 360.021L47.918 356.956C47.918 356.956 47.8852 358.618 48.2683 359.348C48.9232 360.594 50.0721 361.7 51.4195 362.399C52.0718 362.737 53.6332 362.86 53.6332 362.86Z'
          fill='url(#paint3_linear)'
        />
        <Path
          d='M53.6553 362.871L69.6574 350.017C69.6574 350.017 67.9399 347.415 66.813 346.296C65.7263 345.217 63.0932 343.467 63.0932 343.467L47.8439 357.008L53.6551 362.872L53.6553 362.871Z'
          fill='url(#paint4_linear)'
        />
        <Path
          d='M7.20261 373.902C4.77759 381.141 8.26495 389.466 15.3886 393.638C20.8819 397.238 28.3658 398.058 34.8323 396.115C41.0735 394.368 46.3322 390.613 50.6829 386.409C54.3531 382.767 57.0941 377.574 55.1429 372.731C54.2735 370.611 51.8927 369.375 50.3395 367.661C45.6847 363.385 41.0325 359.106 36.3771 354.831C30.9891 353.162 25.2613 355.386 20.8089 358.056C15.5235 361.358 11.0784 365.833 8.36898 371.021C7.9043 371.955 7.50453 372.92 7.20281 373.901L7.20261 373.902Z'
          fill='url(#paint5_linear)'
        />
        <G opacity='0.35'>
          <Path
            opacity='0.35'
            d='M21.1572 384.552C20.5744 384.271 16.9838 385.384 16.9838 385.384L17.5075 385.807L15.949 386.68C15.949 386.68 16.6926 386.706 16.6766 386.878C16.6175 387.02 16.1333 387.478 16.1333 387.478C16.1333 387.478 17.5185 387.643 17.6061 388.008C17.7366 388.403 17.7421 389.321 17.7421 389.321C17.7421 389.321 21.3043 389.163 21.8656 388.698C22.4607 388.195 21.7488 384.9 21.1572 384.552Z'
            fill='#323232'
          />
          <Path
            opacity='0.35'
            d='M15.1989 380.433C14.6161 380.152 11.0254 381.266 11.0254 381.266L11.5493 381.689L9.99075 382.561C9.99075 382.561 10.7343 382.588 10.7182 382.76C10.6593 382.902 10.175 383.359 10.175 383.359C10.175 383.359 11.5602 383.524 11.6478 383.89C11.7783 384.285 11.7838 385.202 11.7838 385.202C11.7838 385.202 15.346 385.044 15.9073 384.579C16.5024 384.076 15.7906 380.781 15.1989 380.433Z'
            fill='#323232'
          />
          <Path
            opacity='0.35'
            d='M33.4473 362.97C29.1042 363.99 23.2101 368.569 23.2101 368.569L21.1707 369.049L21.1083 370.042L16.6546 372.569L17.0015 373.419L12.5691 376.692L14.739 376.608L12.6286 379.476L16.2585 377.78L16.3747 378.653L18.9037 377.171L19.3167 377.639C19.3167 377.639 29.6161 369.585 33.3927 368.112C35.0978 367.463 36.492 367.695 37.4358 368.348C38.5941 369.148 39.0126 370.535 38.3514 371.418C37.1219 373.006 28.2108 378.912 28.2108 378.912L28.1395 379.838L25.6053 381.864L27.9181 381.391L23.4913 385.583L27.8111 383.511L27.4163 384.64L30.106 382.903L30.7835 383.311C30.7835 383.311 35.9825 379.653 41.3762 375.703C46.8718 371.64 45.5288 367.117 41.9252 364.626C39.6514 363.054 36.434 362.293 33.4473 362.97Z'
            fill='#323232'
          />
        </G>
        <Path
          d='M65.4053 384.515C65.4053 384.515 58.799 378.929 58.0026 375.211C57.4829 372.785 59.991 368.013 59.991 368.013L52.6931 365.217C52.6931 365.217 49.4529 369.364 47.0066 370.466C43.0058 372.27 33.6449 372.097 33.6449 372.097L65.4048 384.515L65.4053 384.515Z'
          fill='url(#paint6_linear)'
        />
        <Path
          d='M57.5639 374.25L53.7426 371.984L48.1929 370.058C48.1929 370.058 49.0293 371.896 49.8324 372.543C51.2055 373.649 53.0468 374.403 54.8923 374.63C55.7856 374.74 57.5639 374.25 57.5639 374.25V374.25Z'
          fill='url(#paint7_linear)'
        />
        <Path
          d='M57.594 374.253L68.4114 353.739C68.4114 353.739 65.1611 351.571 63.3371 350.794C61.5782 350.045 57.7694 349.177 57.7694 349.177L48.1387 370.144L57.594 374.254V374.253Z'
          fill='url(#paint8_linear)'
        />
        <Path
          d='M12.3976 404.954C13.5351 413.871 21.7313 421.611 31.7394 423.339C39.6578 425.091 48.3027 422.996 54.3802 418.274C60.3136 413.859 64.1147 407.632 66.6841 401.277C68.8013 395.811 69.0842 389.014 64.4009 384.479C62.334 382.5 59.0727 382.097 56.4683 380.837C49.1151 378.007 41.7638 375.173 34.4103 372.344C27.621 372.669 22.5012 377.402 19.0156 382.115C14.9475 387.855 12.4171 394.547 12.1658 401.325C12.146 402.536 12.2138 403.756 12.3974 404.953L12.3976 404.954Z'
          fill='url(#paint9_radial)'
        />
        <Path
          d='M63.9691 381.368C68.2793 381.368 71.7734 384.437 71.7734 388.224C71.7734 392.01 68.2793 395.079 63.9691 395.079C59.6589 395.079 56.1647 392.01 56.1647 388.224C56.1647 384.437 59.6589 381.368 63.9691 381.368Z'
          fill='url(#paint10_radial)'
        />
        <Path
          d='M60.3011 382.171C61.0801 381.942 61.9119 381.812 62.7786 381.812C67.0888 381.812 70.5822 384.886 70.5822 388.672C70.5822 391.299 68.8989 393.579 66.4284 394.73C69.5331 393.825 71.7705 391.255 71.7705 388.224C71.7705 384.438 68.277 381.365 63.9669 381.365C62.6413 381.365 61.3945 381.659 60.3011 382.171V382.171Z'
          fill='url(#paint11_linear)'
        />
        <Path
          d='M67.5852 394.236C66.8063 394.465 65.9746 394.595 65.1078 394.595C60.7976 394.595 57.3043 391.522 57.3043 387.736C57.3043 385.108 58.9875 382.828 61.4581 381.677C58.3532 382.583 56.1158 385.152 56.1158 388.183C56.1158 391.969 59.6094 395.042 63.9195 395.042C65.2451 395.042 66.4918 394.748 67.5852 394.236V394.236Z'
          fill='url(#paint12_linear)'
        />
        <G opacity='0.35'>
          <Path
            opacity='0.35'
            d='M35.4965 411.614C34.7018 411.562 31.4301 414.339 31.4301 414.339L32.2417 414.571L31.0443 416.2C31.0443 416.2 31.8686 415.905 31.9492 416.099C31.9662 416.279 31.7005 416.988 31.7005 416.988C31.7005 416.988 33.3025 416.564 33.6065 416.923C33.9743 417.296 34.5047 418.293 34.5047 418.293C34.5047 418.293 38.2912 416.568 38.6362 415.818C38.9966 415.011 36.3393 411.735 35.4965 411.614Z'
            fill='#323232'
          />
          <Path
            opacity='0.35'
            d='M26.6586 409.728C25.8639 409.676 22.5922 412.453 22.5922 412.453L23.4038 412.685L22.2064 414.314C22.2064 414.314 23.0307 414.019 23.1113 414.213C23.1283 414.393 22.8626 415.102 22.8626 415.102C22.8626 415.102 24.4646 414.678 24.7687 415.037C25.1364 415.41 25.6668 416.407 25.6668 416.407C25.6668 416.407 29.4533 414.682 29.7983 413.932C30.1587 413.125 27.5013 409.849 26.6586 409.728Z'
            fill='#323232'
          />
          <Path
            opacity='0.35'
            d='M36.5421 382.771C32.398 385.773 28.5994 393.325 28.5994 393.325L26.6539 394.736L27.1532 395.844L23.7502 400.535L24.6129 401.308L21.6596 406.803L23.9728 405.765L23.3145 409.806L26.2962 406.379L26.9213 407.278L28.8271 404.563L29.544 404.893C29.544 404.893 36.1516 391.639 39.4204 388.391C40.9049 386.941 42.5551 386.586 43.955 386.885C45.6731 387.251 46.9204 388.578 46.7056 389.827C46.2747 392.091 39.951 402.402 39.951 402.402L40.4023 403.441L38.8019 406.751L41.0487 405.228L38.6258 411.719L42.1434 407.582L42.3585 408.982L44.294 405.92L45.2641 406.068C45.2641 406.068 48.8322 399.822 52.4457 393.172C56.1058 386.356 52.0597 382.018 46.7144 380.878C43.3418 380.158 39.4053 380.731 36.5421 382.771Z'
            fill='#323232'
          />
        </G>
        <Path
          d='M15.4095 324.392C15.2011 323.301 9.057 319.935 9.057 319.935L8.95286 321.118L5.62044 320.118C5.62044 320.118 6.45354 321.118 6.14112 321.301C5.82871 321.391 4.47492 321.301 4.47492 321.301C4.47492 321.301 5.82871 323.301 5.30802 323.847C4.78733 324.483 3.22525 325.575 3.22525 325.575C3.22525 325.575 7.70319 330.031 9.16113 330.213C10.7232 330.395 15.5135 325.575 15.4095 324.392Z'
          fill='url(#paint13_linear)'
        />
        <Path
          d='M15.4095 311.76C15.2011 310.669 9.057 307.303 9.057 307.303L8.95286 308.486L5.62044 307.485C5.62044 307.485 6.45354 308.486 6.14112 308.667C5.82871 308.758 4.47492 308.667 4.47492 308.667C4.47492 308.667 5.82871 310.669 5.30802 311.214C4.78733 311.851 3.22525 312.942 3.22525 312.942C3.22525 312.942 7.70319 317.399 9.16113 317.581C10.7232 317.763 15.5135 312.942 15.4095 311.76Z'
          fill='url(#paint14_linear)'
        />
        <Path
          d='M66.8071 314.919C59.934 310.462 45.1464 308.188 45.1464 308.188L41.9181 306.097L40.1478 307.189L30.5671 304.369L29.5257 305.824L18.6953 303.914L21.4029 306.642L14.0091 307.28L21.1947 310.008L19.8408 311.19L25.3602 312.736L25.0478 313.827C25.0478 313.827 50.9782 317.739 57.9555 320.921C61.0795 322.376 62.3292 324.468 62.3292 326.47C62.3292 328.925 60.4548 331.108 58.1637 331.29C53.9982 331.563 33.3788 326.924 33.3788 326.924L31.7126 327.925L25.256 327.015L28.7968 329.47L16.4043 328.653L25.0478 331.836L22.6526 332.654L28.7968 334.109L28.9008 335.474C28.9008 335.474 41.2933 337.929 54.4148 340.294C67.8486 342.659 73.9928 335.565 73.9928 327.925C73.9928 323.104 71.4934 318.012 66.8071 314.919Z'
          fill='url(#paint15_linear)'
        />
        <Path
          d='M73.6803 310.422C73.6803 310.422 70.2437 276.679 63.8913 270.222C57.5389 263.673 49.7285 265.402 46.0837 272.132C45.563 273.132 45.0423 274.497 44.6257 275.952C35.3575 269.312 23.2774 263.856 17.8622 268.676C14.9464 271.314 14.0091 274.314 14.0091 277.407C14.0091 280.5 14.9464 283.682 16.0919 286.502C18.1746 292.05 24.9436 305.147 24.9436 305.147L25.3602 302.783L29.2133 308.785L27.8595 302.6L29.4216 303.328L26.9223 295.597L30.1505 298.689C30.1505 298.689 29.4216 296.962 28.276 294.506L42.3347 297.598C47.7499 302.055 52.1237 307.966 52.1237 307.966L51.4988 306.147L52.5403 306.784L50.4575 303.328L52.2279 303.782C51.7072 302.418 51.2906 300.963 50.9782 299.599L64.6203 302.6C64.8286 305.42 64.8286 307.329 64.8286 307.329L67.2237 305.147L69.6189 308.694L69.8272 304.783L73.6803 310.422ZM41.7099 289.14L24.7353 285.32C24.0063 283.319 23.2774 281.227 22.8608 279.499C22.5484 278.408 22.4443 277.498 22.4443 276.679C22.4443 269.312 34.8368 277.316 42.4388 282.774L39.8354 284.592L40.6685 286.138L36.2947 286.321L41.7099 289.14ZM63.8913 294.142L50.1451 291.05C50.0409 283.865 51.7072 277.68 52.9568 276.134C54.9354 273.769 59.2051 275.68 61.9127 284.501C62.85 287.412 63.4748 290.776 63.8913 294.142Z'
          fill='url(#paint16_linear)'
        />
        <Path
          d='M69.9313 278.23L70.1396 273.228L71.91 276.23L71.181 267.044L73.6803 267.589L66.7031 236.485L66.3907 243.033L63.6831 236.848L63.0582 239.759L60.7671 236.485L61.7044 244.579L58.9968 244.398L61.9127 259.131L45.563 254.492L45.0423 245.398L43.3761 247.126L41.6057 243.033L39.8354 249.763L38.5857 249.672L38.794 252.492L26.6098 248.945L23.2774 238.122L28.7968 239.031L27.1305 237.213L34.1078 238.122L28.3802 234.666L32.2333 234.393C32.2333 234.393 21.8195 231.664 16.8208 230.664C14.738 230.209 14.0091 231.937 14.0091 234.939C14.0091 244.307 22.0277 265.771 22.6526 267.863L24.4229 267.589L27.1305 272.683L27.4429 267.681L29.5257 269.136L29.005 264.588L31.5044 265.589L29.3174 258.313L39.523 261.314L39.8354 265.134L40.9809 263.769L42.7512 264.861L43.6885 264.042L46.3961 266.953L46.1878 263.224L63.6831 268.226L64.7244 273.319L66.7031 273.047L69.9313 278.23Z'
          fill='url(#paint17_linear)'
        />
        <Path
          d='M28.6926 238.659L28.5884 234.657L30.7754 233.656L30.0464 230.474H32.754C32.754 230.474 31.1919 226.836 29.3174 222.288L30.9837 223.925L57.8513 231.656L59.2051 231.019L65.87 232.383L64.9327 230.2L73.7845 231.383L67.3279 228.564L66.8072 226.653L59.9341 224.926L58.4761 222.47L48.1665 219.833C48.0623 219.377 47.7499 218.832 47.4375 218.104L62.6417 206.19L60.9755 204.28L66.5989 200.278L63.6831 200.369L73.7845 190.729L65.0369 194.821L63.9955 192.73L60.0382 196.003L58.4761 195.549L42.7513 208.827C38.6899 202.098 32.025 194.366 22.6526 194.548C15.6753 194.73 14.1133 199.55 14.1133 204.189C14.1133 207.009 14.738 209.646 15.0505 211.192C16.0919 215.194 21.8195 231.565 21.8195 231.565L24.0064 230.747L28.6926 238.659ZM33.2747 216.103L30.8795 217.013L26.1933 214.83C24.0064 209.464 22.2361 204.644 22.5485 204.098C23.0692 202.915 27.5471 201.915 31.4002 207.009C33.8995 210.283 36.1905 214.466 37.6485 217.195L33.2747 216.103Z'
          fill='url(#paint18_linear)'
        />
        <Path
          d='M48.3748 176.227C49.2078 175.955 49.5203 178.501 49.5203 178.501C49.5203 178.501 49.5203 173.499 49.9367 173.136C50.3533 172.863 51.2906 173.59 51.2906 173.59V147.669C51.2906 147.669 49.9367 149.307 49.6243 148.488C49.312 147.669 49.6243 145.668 49.6243 145.668L47.1251 148.033L45.0423 138.301C45.0423 138.301 44.3133 144.759 43.5843 145.123C42.7512 145.396 42.4388 142.849 42.4388 142.849C42.4388 142.849 42.4388 147.76 42.0223 148.125C41.6057 148.488 40.6685 147.669 40.6685 147.669V173.681C40.6685 173.681 42.0223 172.044 42.3347 172.862C42.6472 173.681 42.3347 175.591 42.3347 175.591L44.834 173.227L46.9167 182.958C46.9167 182.958 47.6457 176.501 48.3748 176.227Z'
          fill='url(#paint19_linear)'
        />
        <Path
          d='M28.5884 133.134L30.8795 132.133L30.0464 128.95H32.754C32.754 128.95 31.5044 125.949 29.8381 122.038L57.7472 130.132L68.2652 133.316L68.3693 131.224L73.8886 131.861L65.87 127.131L69.3065 126.95L64.4121 123.584L58.4761 121.856L55.6645 120.128L48.1665 118.218C47.7499 117.036 46.8127 114.944 44.9382 111.124C41.2933 104.03 33.8995 92.7526 22.7568 93.0249C15.7795 93.207 14.1133 98.0271 14.1133 102.666C14.1133 105.485 14.738 108.123 15.1546 109.669C16.0919 113.67 21.8195 130.132 21.8195 130.132L24.1105 129.223L28.6926 137.135L28.5884 133.134ZM34.0037 113.67L29.8381 112.215C29.8381 112.215 29.3174 112.762 29.005 113.125L25.8808 112.306C23.9022 107.395 22.3402 103.12 22.5485 102.575C23.1732 101.392 27.6513 100.392 31.5044 105.576C33.0665 107.668 34.7326 110.305 35.9823 112.579L33.8995 111.67L34.0037 113.67Z'
          fill='url(#paint20_linear)'
        />
        <Path
          d='M73.8886 96.7559V90.8439C73.8886 90.8439 73.1596 88.2977 72.5348 87.5701C63.5789 75.656 55.1437 69.5618 29.1092 67.4701L29.6299 68.4709L22.8608 68.562L29.005 71.1081L27.8595 72.9277L33.3789 74.5641V76.4747C33.3789 76.4747 37.9609 76.1104 42.3347 77.0202C46.6044 77.9299 49.2078 81.6581 49.2078 81.6581L52.6444 81.9313C58.4761 84.0231 62.6416 89.2075 62.6416 89.2075L60.9755 89.1164C60.9755 89.1164 61.7045 90.0261 61.3921 92.209C61.0796 94.3008 54.3106 93.9365 51.0824 93.2089C47.9582 92.5723 45.7712 90.5716 45.7712 90.5716L40.5644 90.935L40.7726 89.3896L35.1492 86.5693L27.9636 85.115L30.3589 84.1142C30.3589 84.1142 26.2974 82.2045 26.2974 79.2941C26.2974 76.3836 31.0878 76.3836 31.0878 76.3836C29.734 74.2918 25.0478 73.9276 25.0478 73.9276L26.1933 72.0179L23.2774 70.1073C23.2774 70.1073 14.2174 73.7454 14.2174 81.2948C14.2174 88.8432 28.0678 93.391 30.1505 95.2096C32.3374 97.1202 32.3374 97.8478 40.252 99.6664C48.1664 101.395 52.4361 100.485 52.4361 100.485L57.9555 102.486C65.5576 102.122 73.8886 96.7559 73.8886 96.7559Z'
          fill='url(#paint21_linear)'
        />
        <Path
          d='M59.934 73.737L62.85 72.9183L73.8886 74.8279L69.8273 72.463L68.9941 70.5533L64.4121 68.3705L68.4734 67.6429L44.1051 60.6399L65.7658 51.4542L65.3492 49.9989H65.6616L69.6189 49.2713L72.5348 46.543L69.8273 45.8154L73.8886 44.6324L25.985 30.8997L24.1105 31.4452L18.3829 30.0811L19.8408 31.5363L14.2174 31.4452L21.0905 34.719L18.0705 35.5377L23.9023 37.5384L26.0892 39.3579L52.1237 46.9063L28.9008 56.2743L22.236 58.4571L23.9023 60.0034L19.3202 62.0041L59.934 73.737Z'
          fill='url(#paint22_linear)'
        />
        <Path
          d='M73.6803 29.8126C73.6803 25.5379 70.0355 18.8073 67.2237 14.1684L68.7858 14.0782L68.2652 12.5319L73.6803 12.3498L69.0982 10.258L71.91 9.53042L66.4947 8.16626L66.7031 7.34756L52.6443 6.34676L49.1037 2.52746V5.9834L44.5216 0.890106L49.6243 18.1707L50.6658 16.6244L54.3106 23.6274L55.4561 18.8983L58.3719 21.6267L56.2892 15.8968C58.0595 18.0797 61.6003 23.0819 61.2879 27.3565C60.9755 32.4498 45.3547 27.5387 36.2947 23.3551H39.8354L26.6098 17.1699C24.1105 14.6237 23.4857 12.3498 24.0063 11.349C24.7353 9.80364 30.4629 12.5319 30.4629 12.5319L29.3174 10.6214L35.1491 11.8954L32.9623 9.71256L41.2933 11.6222L35.9823 7.43865L36.7112 6.61995C36.7112 6.61995 29.7339 3.34615 24.6312 2.52746C19.4243 1.70878 14.0091 4.07376 14.0091 10.8035C14.0091 16.17 17.9664 23.5363 30.6712 29.8126L28.5884 31.449L32.3374 30.6303C35.045 31.9043 38.1691 33.0864 41.7099 34.2684C63.2665 41.1812 73.6803 36.9066 73.6803 29.8126Z'
          fill='url(#paint23_linear)'
        />
      </G>
      <Defs>
        {/* <filter
          id='filter0_f'
          x='32.0689'
          y='335.986'
          width='51.8037'
          height='80.1082'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='6.43948'
            result='effect1_foregroundBlur'
          />
        </filter> */}
        <LinearGradient
          id='paint0_linear'
          x1='44.0976'
          y1='402.893'
          x2='64.6413'
          y2='346.562'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-opacity='0' />
          <Stop offset='0.425' />
          <Stop offset='1' stop-opacity='0' />
        </LinearGradient>
        <RadialGradient
          id='paint1_radial'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(69.4267 400.007) rotate(-64.4458) scale(9.75197 1.70762)'
        >
          <Stop />
          <Stop offset='1' stop-opacity='0' />
        </RadialGradient>
        <LinearGradient
          id='paint2_linear'
          x1='120.249'
          y1='392.755'
          x2='119.912'
          y2='394.187'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#D5D5D5' />
          <Stop offset='1' stop-color='#878787' />
        </LinearGradient>
        <LinearGradient
          id='paint3_linear'
          x1='126.614'
          y1='393.526'
          x2='126.073'
          y2='395.828'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#C0C0C0' />
          <Stop offset='1' stop-color='#FDFDFD' />
        </LinearGradient>
        <LinearGradient
          id='paint4_linear'
          x1='43.6016'
          y1='343.013'
          x2='59.1493'
          y2='359.703'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#787878' />
          <Stop offset='0.5' stop-color='#848484' />
          <Stop offset='1' stop-color='#D3D3D3' />
        </LinearGradient>
        <LinearGradient
          id='paint5_linear'
          x1='18.275'
          y1='363.289'
          x2='32.8589'
          y2='379.269'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#FF1313' />
          <Stop offset='1' stop-color='#880000' />
        </LinearGradient>
        <LinearGradient
          id='paint6_linear'
          x1='146.369'
          y1='380.397'
          x2='146.57'
          y2='382.125'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#D5D5D5' />
          <Stop offset='1' stop-color='#878787' />
        </LinearGradient>
        <LinearGradient
          id='paint7_linear'
          x1='153.76'
          y1='378.695'
          x2='154.082'
          y2='381.473'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#C0C0C0' />
          <Stop offset='1' stop-color='#FDFDFD' />
        </LinearGradient>
        <LinearGradient
          id='paint8_linear'
          x1='36.1378'
          y1='356.482'
          x2='62.34'
          y2='367.692'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#787878' />
          <Stop offset='0.5' stop-color='#848484' />
          <Stop offset='1' stop-color='#D3D3D3' />
        </LinearGradient>
        <RadialGradient
          id='paint9_radial'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(60.9033 413.557) rotate(-131.33) scale(48.3878 48.0906)'
        >
          <Stop stop-color='#FF1313' />
          <Stop offset='1' stop-color='#C80000' />
        </RadialGradient>
        <RadialGradient
          id='paint10_radial'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(-38.0424 334.064) rotate(-90) scale(9.9056 11.2766)'
        >
          <Stop stop-color='#F9F9F9' />
          <Stop offset='1' stop-color='#CCCCCC' />
        </RadialGradient>
        <LinearGradient
          id='paint11_linear'
          x1='60.3011'
          y1='376.152'
          x2='60.3011'
          y2='386.23'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='#B3B3B3' />
          <Stop offset='1' stop-color='#B3B3B3' stop-opacity='0' />
        </LinearGradient>
        <LinearGradient
          id='paint12_linear'
          x1='56.1158'
          y1='394.04'
          x2='56.1158'
          y2='388.721'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='white' stop-opacity='0' />
        </LinearGradient>
        <LinearGradient
          id='paint13_linear'
          x1='3.22525'
          y1='325.077'
          x2='15.4111'
          y2='325.077'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint14_linear'
          x1='3.22525'
          y1='312.444'
          x2='15.4111'
          y2='312.444'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint15_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint16_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint17_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint18_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint19_linear'
          x1='14.009'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint20_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint21_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint22_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <LinearGradient
          id='paint23_linear'
          x1='14.0091'
          y1='170.823'
          x2='73.9928'
          y2='170.823'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stop-color='white' />
          <Stop offset='1' stop-color='#DDDDDD' />
        </LinearGradient>
        <ClipPath id='clip0'>
          <Rect
            width='423.425'
            height='86'
            fill='white'
            transform='translate(0 424.315) rotate(-90)'
          />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
)