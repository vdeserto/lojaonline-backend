import Address from '../models/Address'

export default {
    render(address: Address) {
        return {
            cep: address.cep,
            logradouro: address.logradouro,
            bairro: address.bairro,
            numero: address.numero,
            localidade: address.localidade,
            uf: address.uf,
            complemento: address.complemento
        }
    }
}
