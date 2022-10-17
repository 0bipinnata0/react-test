const Field: React.FC<{
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}> = (props) => {
  const { children, checked, onChange } = props;
  return (
    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" checked={checked} onChange={onChange} />
          &nbsp;{children}
        </label>
      </div>
    </div>
  );
};

export default Field;
