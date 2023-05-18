import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';
export function Loader() {
  return (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
      wrapperClass={css.Loader}
    />
  );
}
