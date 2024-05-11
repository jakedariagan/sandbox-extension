enum Proficiency {
  Beginner
  Intermediate
  Advanced
  Expert
}

type Language {
  JavaScript: Proficiency
  Python: Proficiency
  Rust: Proficiency
  Java: Proficiency
  Swift: Proficiency
  Go: Proficiency
  Cpp: Proficiency
  Scala: Proficiency
  WebAssembly: Proficiency
  Solidity: Proficiency
  Other: Proficiency
}

type CeramicDev
  @createModel(
    accountRelation: SET
    accountRelationFields: ["context"]
    description: "A Ceramic developer") {
  developer: DID! @documentAccount
  context: String! @string(maxLength: 100)
  languages: Language!
  attestations: [AttestToDev] @relationFrom(model: "AttestToDev", property: "attestedProfileId")
}

type AttestToDev @createModel(
    accountRelation: SET
    accountRelationFields: ["attestedProfileId"]
    description: "Signals if user attests to another developer profile") {
  attester: DID! @documentAccount
  attestedProfileId: StreamID! @documentReference(model: "CeramicDev")
  profile: CeramicDev! @relationDocument(property: "attestedProfileId")
  signal: Boolean!
}
