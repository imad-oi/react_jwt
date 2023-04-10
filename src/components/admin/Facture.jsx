const Facture = () => {
  return (
    <>
      <div className="contaier">
        <div className="row">
          <div className="col">
            <h2>Invoice #TETR (YWO-68362)</h2>
            <hr />
            <div class="row mt-4">
              <div class="col-md-6">
                <h4>Informations sur le client</h4>
                <p>Nom: Ahmed El Aadi</p>
                <p>Adresse: 123 rue de Allal El fassi</p>
                <p>Ville: Marrakech</p>
                <p>Pays: Maroc</p>
              </div>
              <div class="col-md-6 text-md-right">
                <h4>Informations sur la facture</h4>
                <p>Numéro de facture: 123456</p>
                <p>Date: 08/04/2023</p>
              </div>
            </div>
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Service</th>
                  <th scope="col">Medicament</th>
                  <th scope="col">Quantite</th>
                  <th scope="col">Prix unitaire</th>
                  <th scope="col">Prix total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Radio</td>
                  <td>vital-100m</td>
                  <td>2</td>
                  <td>10 €</td>
                  <td>20 €</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Operation</td>
                  <td>Aspirogine- Expo-50m</td>
                  <td>1</td>
                  <td>50 €</td>
                  <td>50 €</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" className="text-right text-dark fs-4 fw-bolder">
                    Total
                  </td>
                  <td className="fs-4 fw-bolder">70 €</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facture;
