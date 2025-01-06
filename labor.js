const registries = {
  "ghcr": "ghcr.io",
  "dockerhub": "docker.io",
};

function getRegistryUrl(alias) {
  return registries[alias];
}

console.log(getRegistryUrl("ghcr")); // Output: "ghcr.io"
