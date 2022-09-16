export default function StrengthMeter({ strengthConfig }) {
  return (
    <>
        {strengthConfig &&
        <div className="box strength">
        <div className="strength__name">STRENGTH</div>
        <div className="strength__indication">
            <div className="strength__indication-status">{strengthConfig}</div>
            <div className={`strength__indication-bar ${strengthConfig.toLowerCase()}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </div>
        }
    </>
  );
}
