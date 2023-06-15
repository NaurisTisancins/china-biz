import { BNPParibas } from '../logos/BNPParibas';
import { Bloomberg } from '../logos/Bloomberg';
import { CMEGroup } from '../logos/CMEGroup';
import { GovernmentActuary } from '../logos/GovernmentActuary';
import { JPMorgan } from '../logos/JPMorgan';
import { KX } from '../logos/KX';

function SelectedClientsSection() {
  return (
    <section className="selected-clients-section section-container">
      <h2 className="secondary-title-1 ">我们的客户 Our Clients</h2>
      <div className="selected-clients-container">
        <div className="selected-clients-item">
          <Bloomberg width="120" height="60" />
        </div>
        <div className="selected-clients-item">
          <BNPParibas width="120" height="60" />
        </div>
        <div className="selected-clients-item">
          <CMEGroup width="120" height="60" />
        </div>
        <div className="selected-clients-item">
          <GovernmentActuary width="80" height="80" />
        </div>
        <div className="selected-clients-item text-lg">Jefferies</div>
        <div className="selected-clients-item">
          <JPMorgan width="110" height="60" />
        </div>
        <div className="selected-clients-item">
          <KX width="80" height="80" />
        </div>
      </div>
    </section>
  );
}

export default SelectedClientsSection;
