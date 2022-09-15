export default function StrengthMeter() {
  return (
    <div className="box strength">
      <div className="strength__name">STRENGTH</div>
      <div className="strength__indication">
        <div className="strength__indication-status">MEDIUM</div>
        <div className="strength__indication-bar">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
