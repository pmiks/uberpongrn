import React, { FC } from 'react'
import { View, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface Props {
  style?: ViewStyle
  color?: string
  opacity?: number
  width?: number
  height?: number
}

export const SvgUberPredator: FC<Props> = ({
  style,
  width = '188',
  height = '50',
  opacity,
}) => (
  <View pointerEvents='none' style={{ ...style, opacity, ...width, ...height }}>
    <Svg width={width} height={height} viewBox='0 0 188 50' fill='none'>
      <Path
        d='M0.624713 51.4813C0.776663 52.0721 0.48027 52.5991 0.48027 52.5991C0.48027 52.5991 1.57918 56.603 5.53964 56.5079L5.34021 55.989L6.64455 56.4373C11.0805 55.7786 12.3433 49.4882 12.4225 45.7719L11.9362 45.2185L12.6477 43.9847L13.8419 37.0554L13.0707 36.9333L13.1527 35.2064L12.1238 36.2564L12.1238 33.5202L11.1952 35.669L10.9558 35.5626L10.6384 38.1149L10.2132 37.8599L10.1482 42.1018L9.60022 46.567L9.77864 47.7431L9.45578 47.6848C9.55354 50.8984 7.81788 52.9014 6.11677 53.2494C5.60942 53.3532 5.06544 53.278 4.61642 53.0589C4.1416 52.4098 3.84518 51.5687 3.84518 51.5687L3.60847 52.0835C3.21098 51.3564 3.02103 50.2759 3.19396 48.8414L3.18785 48.8115L3.63271 45.3625L4.09528 44.5838L3.95011 44.1782L4.53134 41.8517L4.0362 42.0152L4.46343 38.6319L3.94591 39.142L3.73697 37.8167L3.30084 37.8126L3.23023 35.3396L2.37431 37.6912L1.86017 37.6098L1.30409 41.5791L1.48046 42.2893L0.933138 44.1735L0 50.7074C0 50.7074 0.472764 50.8905 0.624713 51.4813Z'
        fill='black'
      />
      <Path
        d='M15.1301 54.0485L15.1091 54.7057L16.7681 52.936L17.1879 53.3165L17.5454 53.088L19.5558 53.796L22.3598 51.5434L24.379 51.5345L24.9976 50.9105C27.6978 49.5186 31.1813 46.9404 29.8505 44.5386C29.1037 43.1679 27.488 42.5656 26.2501 42.2902C26.4224 42.0684 26.535 41.8588 26.6713 41.6133C28.9522 37.2601 28.9739 35.3901 27.9354 34.2655C26.8908 33.1111 16.3864 32.6793 16.3864 32.6793L15.7325 33.4349L14.4234 33.2674L13.9894 33.7293L11.671 33.6439L13.7188 34.6864L13.4115 35.4644C13.4115 35.4644 14.6846 35.6082 16.3939 35.756C16.027 36.5462 15.4227 37.6959 14.6135 38.4522L15.6594 38.5491L15.2084 39.2322C15.2084 39.2322 15.7829 39.4567 15.8256 39.6656C15.8622 39.8446 15.9077 40.6749 15.9077 40.6749L14.2774 51.7044L13.8691 52.5963L14.3304 52.8751L14.0645 54.9194L15.1301 54.0485ZM18.5429 43.5249L19.2835 42.1297L19.0068 41.6888L19.4097 40.9223L18.5279 41.4758L19.3166 36.0598C21.9883 36.3527 24.5943 36.628 24.8995 36.7521C25.5161 37.0302 25.6688 39.1444 23.147 41.7124C21.785 43.1104 20.2176 43.9596 19.0665 44.4128L18.956 43.7202L18.5429 43.5249ZM17.2509 49.9767L17.4598 48.5659C18.4318 48.1494 21.3117 46.8762 23.6931 44.9899C24.9818 44.6018 26.1769 44.6683 26.5018 45.1926C27.6149 46.9859 20.9659 49.7453 18.054 50.5587L18.0154 49.9136L17.2509 49.9767Z'
        fill='black'
      />
      <Path
        d='M33.0501 49.6363L33.392 49.9395L33.8437 49.4117L33.8376 49.3819L34.4413 49.445L35.747 48.8358L36.2448 49.2937L40.1598 48.3684L40.3436 48.051L42.9156 47.4004L41.5469 47.2451L46.6291 45.4903L44.1968 45.3038L41.654 45.7929L42.1878 44.9064L41.7822 45.0516L41.9599 44.7043L35.1079 46.1682L35.3901 45.1155L34.5775 45.0952L35.1831 41.52L40.2566 39.114L39.2642 38.975L40.1819 38.4452L40.1561 38.0152L41.8057 36.8071L35.7711 38.0105L36.0335 36.5577L35.7236 36.7143L36.5306 31.3878L41.5919 30.2902L42.0979 31.2439L42.3515 30.5079L43.7794 33.2319L43.6579 31.4222L44.1388 32.1012L44.1021 29.1859L44.4813 29.8235C44.4813 29.8235 44.3775 27.9481 44.2798 27.4706C44.1821 26.9931 43.2271 27.1884 41.8841 27.4632L31.6775 29.5512L32.1272 29.9256L30.0856 30.281L30.2124 30.5971L27.8418 30.8644L29.3781 31.0787L28.4713 31.3575L33.3284 31.3899L32.8638 31.7026L33.4675 31.7657L32.1734 33.6473L33.4635 33.5699L32.7209 38.6034L31.3738 39.3143L32.0555 39.4547L30.4657 40.6505L32.3845 40.9109L31.3809 47.708L31.7119 48.2621L31.773 51.2967L33.0501 49.6363Z'
        fill='black'
      />
      <Path
        d='M43.9218 29.0052L43.6003 29.2575L48.1909 29.8108L48.1557 29.9424L46.167 31.4686L47.0813 31.5303L46.4384 33.403L47.6857 33.1168L46.1767 40.4836L46.5308 40.8465L45.5563 47.4821L46.0575 47.3484L46.1091 49.5766C46.1091 49.5766 46.7514 47.5485 47.0078 47.4339C47.2642 47.3192 47.4765 48.0531 47.4765 48.0531C47.4765 48.0531 48.0299 46.1987 48.2375 45.8453C48.4389 45.4621 48.9517 45.2328 48.9517 45.2328L49.638 39.6201L53.1909 43.3084L53.0023 42.5386L55.6904 45.1913C55.6904 45.1913 55.8077 44.7009 56.136 44.6337C56.4344 44.5727 57.7198 46.1442 57.7198 46.1442L57.519 45.3147L59.151 46.9086L57.0801 43.3212L57.8757 43.5627L57.6946 43.1333L57.6987 42.6972L52.8217 38.1603C53.9619 37.9582 55.1726 37.4928 56.1303 36.5507C58.5931 34.1502 58.7375 30.2962 58.6133 29.2334C58.519 28.1644 57.3714 28.0261 54.9024 27.6605C52.4633 27.2889 45.4947 26.6624 45.4947 26.6624L45.1562 27.1358L43.664 27.4411L44.3647 27.8263L41.326 28.3236L43.9218 29.0052ZM50.5609 32.1244L51.0852 31.7995L50.7982 30.3968L50.8688 30.1336L55.2979 30.6578L55.026 31.3042L55.2783 31.6257L54.6021 32.7279L55.2383 33.4062C55.2383 33.4062 54.1925 34.6773 52.7131 35.1976C51.7229 35.5246 50.7244 35.3557 50.1683 35.2207L50.5609 32.1244Z'
        fill='black'
      />
      <Path
        d='M63.6688 37.185C63.8071 37.4055 62.9898 37.666 62.9898 37.666C62.9898 37.666 64.6312 37.3302 64.775 37.4251C64.889 37.5262 64.7052 37.8436 64.7052 37.8436L73.2107 36.1036C73.2107 36.1036 72.5942 35.8255 72.8444 35.6811C73.0947 35.5366 73.7696 35.4918 73.7696 35.4918L72.8471 34.9343L75.9183 33.6841C75.9183 33.6841 73.7567 33.9087 73.5946 33.7242C73.4562 33.5038 74.2735 33.2433 74.2735 33.2433C74.2735 33.2433 72.6619 33.573 72.5181 33.478C72.3743 33.3831 72.588 33.0595 72.588 33.0595L64.0526 34.8056C64.0526 34.8056 64.6692 35.0837 64.4189 35.2282C64.1686 35.3727 63.5236 35.4113 63.5236 35.4113L64.446 35.9689L61.3748 37.219C61.3748 37.219 63.5365 36.9944 63.6688 37.185Z'
        fill='black'
      />
      <Path
        d='M78.4816 22.2144L78.1838 22.4308L82.5174 22.9435L82.4821 23.0751L80.6304 24.511L81.4851 24.5849L80.8774 26.3261L82.0352 26.0582L80.632 33.0302L80.9562 33.3992L80.0278 39.6522L80.4992 39.5247L80.5563 41.6274C80.5563 41.6274 81.1633 39.7309 81.4197 39.6162C81.6462 39.5077 81.8524 40.2118 81.8524 40.2118C81.8524 40.2118 82.3645 38.4591 82.5422 38.1118C82.7497 37.7584 83.2326 37.5352 83.2326 37.5352L84.0579 30.9302C84.6616 30.9932 85.8269 31.0658 87.0803 30.8094C88.095 30.6018 89.1565 30.167 90.0132 29.3388C92.345 27.0583 92.5023 23.4194 92.3904 22.4162C92.2784 21.413 91.1904 21.2625 88.8829 20.9261C86.5395 20.566 79.9832 19.9795 79.9832 19.9795L79.6387 20.4231L78.236 20.71L78.9007 21.0715L76.0411 21.5322L78.4816 22.2144ZM84.4038 28.061L84.7734 25.156L85.238 24.8433L84.9992 23.524L85.0338 23.2371L89.2418 23.7444L88.9936 24.3548L89.2161 24.6824L88.5873 25.7127L89.1876 26.3673C89.1876 26.3673 88.1892 27.5665 86.7934 28.0386C85.8628 28.3533 84.9301 28.2021 84.4038 28.061Z'
        fill='#F51010'
      />
      <Path
        d='M91.8637 19.5079L91.5422 19.7603L96.1328 20.3136L96.0975 20.4452L94.1088 21.9714L95.0231 22.0331L94.3802 23.9058L95.6275 23.6196L94.1185 30.9864L94.4726 31.3492L93.4981 37.9848L93.9994 37.8512L94.051 40.0793C94.051 40.0793 94.6932 38.0513 94.9496 37.9366C95.206 37.822 95.4183 38.5559 95.4183 38.5559C95.4183 38.5559 95.9717 36.7015 96.1793 36.3481C96.3807 35.9649 96.8935 35.7356 96.8935 35.7356L97.5798 30.1228L101.133 33.8112L100.944 33.0414L103.632 35.694C103.632 35.694 103.75 35.2036 104.078 35.1365C104.376 35.0754 105.662 36.647 105.662 36.647L105.461 35.8174L107.093 37.4113L105.022 33.824L105.818 34.0654L105.636 33.6361L105.641 33.2L100.764 28.6631C101.904 28.4609 103.114 27.9956 104.072 27.0534C106.535 24.653 106.679 20.799 106.555 19.7361C106.461 18.6672 105.313 18.5288 102.844 18.1633C100.405 17.7917 93.4365 17.1651 93.4365 17.1651L93.0981 17.6386L91.6059 17.9438L92.3065 18.3291L89.2679 18.8263L91.8637 19.5079ZM98.5027 22.6272L99.027 22.3022L98.7401 20.8996L98.8106 20.6364L103.24 21.1606L102.968 21.807L103.22 22.1285L102.544 23.2307L103.18 23.909C103.18 23.909 102.134 25.1801 100.655 25.7004C99.6647 26.0273 98.6663 25.8585 98.1101 25.7235L98.5027 22.6272Z'
        fill='#F51010'
      />
      <Path
        d='M110.515 34.0994L110.857 34.4025L111.309 33.8748L111.303 33.845L111.907 33.908L113.212 33.2989L113.71 33.7567L117.625 32.8315L117.809 32.514L120.381 31.8635L119.012 31.7082L124.094 29.9534L121.662 29.7669L119.119 30.256L119.653 29.3695L119.247 29.5147L119.425 29.1674L112.573 30.6313L112.855 29.5786L112.043 29.5583L112.648 25.983L117.722 23.5771L116.73 23.438L117.647 22.9083L117.621 22.4782L119.271 21.2702L113.236 22.4736L113.499 21.0207L113.189 21.1774L113.996 15.8509L119.057 14.7533L119.563 15.707L119.817 14.971L121.245 17.6949L121.123 15.8853L121.604 16.5642L121.567 13.649L121.947 14.2866C121.947 14.2866 121.843 12.4111 121.745 11.9336C121.647 11.4561 120.692 11.6515 119.349 11.9262L109.143 14.0142L109.592 14.3886L107.551 14.7441L107.678 15.0602L105.307 15.3275L106.843 15.5418L105.937 15.8206L110.794 15.853L110.329 16.1657L110.933 16.2288L109.639 18.1104L110.929 18.033L110.186 23.0665L108.839 23.7774L109.521 23.9178L107.931 25.1136L109.85 25.374L108.846 32.1711L109.177 32.7252L109.238 35.7598L110.515 34.0994Z'
        fill='#F51010'
      />
      <Path
        d='M123.905 29.4325L124.312 29.598L124.47 31.7421L125.07 30.8732L125.095 32.516C125.095 32.516 126.053 31.7291 126.378 30.8853C126.378 30.8853 130.603 29.6481 133.808 26.3183C134.272 25.8503 134.7 25.3585 135.098 24.8729L135.75 25.0194L135.538 24.2855C135.704 24.0338 135.87 23.7822 136.006 23.5366L136.901 23.1982L136.587 22.5782C137.666 20.5542 138.147 18.6523 138.308 17.1581C138.62 14.7312 138.09 12.4454 137.114 11.9299C136.132 11.3846 126.743 10.6313 126.743 10.6313L127.241 11.0891L124.738 11.0105L124.608 11.4412L123.652 11.4813L123.738 11.8991L121.299 11.5274L123.346 12.4146L122.733 13.0685L125.997 13.5201L124.2 15.0693L124.775 15.4492L124.797 16.3153L125.697 17.2194L123.905 29.4325ZM127.197 25.6185L127.395 24.3033L127.932 24.1934L128.342 20.876L127.952 20.4893L128.769 14.9119L129.528 14.8189L129.261 13.9717L135.364 14.7753C135.364 14.7753 135.353 14.871 135.36 15.0562L134.783 15.7338L135.251 16.1977C135.2 16.7057 135.13 17.2796 134.984 17.9314L134.406 18.2983L134.561 19.5104C134.419 19.8814 134.283 20.2823 134.112 20.6594C133.1 22.8564 130.697 25.4 128.302 26.916L128.205 26.5938L127.83 26.7329L128.226 25.7813L127.197 25.6185Z'
        fill='#F51010'
      />
      <Path
        d='M142.086 27.1434L142.169 28.4633L142.894 27.5998L142.876 28.8784L143.988 26.2568L144.104 26.8239L145.137 25.3377L144.914 23.642L145.071 22.5839L147.383 24.0076L149.084 22.2915L149.598 24.9537L150.132 24.2225L151.053 27.2056L151.169 25.0364L151.477 25.7818L151.816 23.9403L152.194 24.2672L152.15 22.5349L151.718 22.0947L149.384 10.2283L150.005 10.2256L149.824 9.79625L151.046 9.23528L150.261 8.74287L151.208 7.89636L143.109 7.06568L142.902 7.57439L140.095 7.68231L141.196 8.2032L139.238 8.51051L142.127 9.25654L141.46 9.79715L144.203 9.98224L142.985 18.3156L139.253 15.8766L139.931 16.6084L139.021 16.2659L139.664 16.974L137.218 16.4172L139.957 18.4066L139.179 18.2546L139.893 18.8549L138.943 18.7695L142.579 21.0416L141.75 26.7147L142.086 27.1434ZM145.941 16.6537L145.518 15.4966L146.631 14.7091L146.295 14.2804L146.84 10.5621L147.5 13.9406L147.083 14.1814L147.629 14.5673L148.54 19.3247L147.721 19.2745L147.897 19.9847L146.862 20.8495L145.46 19.9237L145.941 16.6537Z'
        fill='#F51010'
      />
      <Path
        d='M149.564 13.4562L152.628 11.8655L150.543 13.2248C150.543 13.2248 150.758 13.2119 150.175 13.8597L157.598 10.4756L157.421 10.8229L157.759 11.7175L156.558 19.8297C156.558 19.8297 156.777 19.2254 157.057 19.2301C157.302 19.2111 156.667 22.7924 156.667 22.7924C156.667 22.7924 156.874 22.4391 157.138 22.5096C157.395 22.5503 157.159 24.7438 157.159 24.7438L157.629 24.1503L157.57 25.8413L158.455 21.9602L158.992 21.6949L159.787 16.3087L160.458 15.4873L160.049 14.7005L160.896 8.96159L167.412 6.01159L166.886 5.87052L168.161 5.11218L167.536 4.33828L171.63 2.00829L167.521 3.50196L167.119 3.05567L168.696 1.80014L150.083 10.5206L150.848 10.6128L150.552 11.1398L151.318 11.5427L149.564 13.4562Z'
        fill='#F51010'
      />
      <Path
        d='M164.959 17.8313L164.965 17.8611L165.406 17.5844C165.885 19.1654 167.352 23.9025 169.5 23.4629C171.769 22.9989 173.428 20.0165 173.636 19.6631L174.3 20.0246L174.282 19.9351C174.282 19.9351 174.162 18.4361 174.726 17.6988C175.321 16.9554 176.695 15.7724 176.725 15.7663L176.683 15.7127L175.799 15.6449C176.048 15.1898 177.623 12.1002 177.753 10.3014L177.747 10.2716L177.132 10.4595L177.304 8.86958C177.441 7.25595 176.853 5.44836 175.705 3.94193C175.302 3.18499 174.658 2.16623 173.993 1.6494L173.939 1.69146L174.08 2.37787C172.947 1.55244 171.756 1.20519 170.772 1.40666L170.742 1.41277C169.757 1.61424 168.828 2.23964 167.924 3.29506L166.375 4.23384L166.529 5.29059C165.295 7.15996 163.77 9.58619 163.746 9.62214L163.722 9.65809L164.28 10.1037C164.252 10.4205 163.729 13.7922 164.959 17.8313ZM168.243 15.947C167.517 13.9189 167.495 10.3166 167.796 9.50876C168.056 8.80267 168.956 8.3387 169.123 8.24238C169.098 8.12301 169.09 7.62719 169.309 7.17816C169.552 6.69319 170.502 5.41054 170.568 5.27285C170.615 5.20095 170.803 4.44738 171.299 4.43923C171.824 4.42497 172.991 6.17625 173.77 8.16223C174.508 10.0946 174.347 11.5889 174.347 11.5889L174.353 11.6187L173.507 12.0406C173.549 12.2495 173.811 13.3775 173.261 14.6405C172.676 16.035 171.095 17.882 171.101 17.9118L171.071 17.918L170.807 17.6921C170.335 18.8771 170.243 19.7975 170.243 19.7975L170.153 19.8158C170.147 19.786 170.014 19.2847 169.803 19.0168C169.683 18.8859 169.588 18.8744 169.432 18.875C169.307 18.8696 169.122 18.8764 168.966 18.7218C168.713 18.4003 168.74 16.2495 168.762 15.9029L168.249 15.9768L168.243 15.947ZM168.266 15.911L168.786 15.8669C168.786 15.8669 168.707 18.3704 169.019 18.6797C169.302 18.9951 169.617 18.7129 169.827 18.9808C170.037 19.2488 170.213 19.8036 170.213 19.8036C170.213 19.8036 170.299 18.8533 170.789 17.6026L171.065 17.8881C171.065 17.8881 172.64 16.0113 173.225 14.6167C173.84 13.2161 173.471 12.0169 173.471 12.0169L174.317 11.595C174.317 11.595 174.484 10.1306 173.711 8.17444C172.973 6.24204 171.801 4.46092 171.305 4.46907C170.815 4.50707 170.603 5.29659 170.603 5.29659C170.603 5.29659 169.582 6.68708 169.345 7.2019C169.079 7.72283 169.159 8.26612 169.159 8.26612C169.159 8.26612 168.11 8.76061 167.832 9.5325C167.555 10.3044 167.553 13.9427 168.266 15.911ZM167.862 9.5264C168.116 8.79046 169.165 8.29597 169.165 8.29597L169.195 8.28986L169.189 8.26002C169.189 8.26002 169.138 7.71062 169.381 7.22564C169.618 6.71082 170.646 5.35017 170.639 5.32033L170.669 5.31422C170.669 5.31422 170.851 4.53081 171.311 4.49892C171.777 4.49687 172.95 6.27799 173.681 8.18054C174.394 9.99356 174.304 11.38 174.281 11.5712L173.405 11.9992L173.417 12.0589C173.417 12.0589 173.787 13.2581 173.195 14.6228C172.645 15.8858 171.279 17.5646 171.053 17.8284L170.777 17.5429L170.759 17.6087C170.387 18.5244 170.229 19.2718 170.177 19.6245C170.091 19.2067 169.916 18.8072 169.45 18.8093C169.295 18.8099 169.169 18.8045 169.043 18.6438C168.809 18.4118 168.801 16.5479 168.816 15.8608L168.84 15.8249L168.29 15.8751C167.619 13.9603 167.561 10.3342 167.862 9.5264Z'
        fill='#F51010'
      />
      <Path
        d='M175.771 2.34281L175.449 2.59514L180.04 3.14849L180.005 3.28008L178.016 4.80625L178.93 4.86795L178.287 6.74069L179.535 6.45443L178.026 13.8212L178.38 14.1841L177.405 20.8197L177.907 20.6861L177.958 22.9142C177.958 22.9142 178.6 20.8862 178.857 20.7715C179.113 20.6569 179.326 21.3908 179.326 21.3908C179.326 21.3908 179.879 19.5364 180.087 19.183C180.288 18.7997 180.801 18.5705 180.801 18.5705L181.487 12.9577L185.04 16.6461L184.851 15.8762L187.539 18.5289C187.539 18.5289 187.657 18.0385 187.985 17.9714C188.283 17.9103 189.569 19.4818 189.569 19.4818L189.368 18.6523L191 20.2462L188.929 16.6589L189.725 16.9003L189.544 16.471L189.548 16.0348L184.671 11.498C185.811 11.2958 187.022 10.8305 187.979 9.88832C190.442 7.48784 190.586 3.63386 190.462 2.571C190.368 1.50204 189.22 1.3637 186.751 0.998177C184.312 0.626545 177.344 0 177.344 0L177.005 0.473447L175.513 0.77871L176.214 1.16395L173.175 1.66121L175.771 2.34281ZM182.41 5.46203L182.934 5.13712L182.647 3.73445L182.718 3.47128L187.147 3.99547L186.875 4.64188L187.127 4.96338L186.451 6.06559L187.087 6.74385C187.087 6.74385 186.041 8.01497 184.562 8.53525C183.572 8.86221 182.573 8.69334 182.017 8.55838L182.41 5.46203Z'
        fill='#F51010'
      />
      <Path
        d='M3.88049 33.9819C4.2718 33.851 5.19679 31.6774 5.19679 31.6774L4.75599 31.7132L4.95393 30.5827C4.95393 30.5827 4.62809 30.9093 4.54511 30.8194C4.49562 30.7243 4.45984 30.2835 4.45984 30.2835C4.45984 30.2835 3.79217 30.8362 3.56454 30.7007C3.30341 30.5705 2.8215 30.132 2.8215 30.132C2.8215 30.132 1.40927 31.8335 1.41688 32.3131C1.42983 32.8263 3.45035 34.0847 3.88049 33.9819Z'
        fill='black'
      />
      <Path
        d='M8.88305 33.2418C9.27437 33.1109 10.1994 30.9373 10.1994 30.9373L9.75856 30.9731L9.95649 29.8425C9.95649 29.8425 9.63065 30.1691 9.54767 30.0793C9.49819 29.9842 9.4624 29.5434 9.4624 29.5434C9.4624 29.5434 8.79473 30.0961 8.5671 29.9606C8.30597 29.8304 7.82406 29.3919 7.82406 29.3919C7.82406 29.3919 6.41183 31.0934 6.41945 31.573C6.43239 32.0861 8.45291 33.3446 8.88305 33.2418Z'
        fill='black'
      />
    </Svg>
  </View>
)
