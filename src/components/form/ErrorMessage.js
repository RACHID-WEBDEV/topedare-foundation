import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
export function ErrorMessage({ className, name }) {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <>
      {errors?.[name] && (
        <div className={classNames('text-red-500 py-1 text-sm ', className)}>{errors?.[name]?.message}</div>
      )}
    </>
  );
}

ErrorMessage.defaultProps = {
  className: null,
  name: null
};
