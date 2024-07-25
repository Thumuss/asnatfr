enum UIDType {
    Actor,
}

interface UID {
    type: UIDType
    value: string
}

interface Actor {
    uid: UIDType
    uri_hatvp: boolean
}

interface EtatCivil {}
interface Profession {}