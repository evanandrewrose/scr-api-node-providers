This package provides methods to determine the SC:R web api port through process inspection.

# Installation

```
npm i --save scr-api-node-providers
```

# Usage Examples

```typescript
// Determine the url for the locally running sc:r web api on a windows machine.
const provider = new LocalWindowsClientProvider();
const host = await provider.provide();

// Determine the url for sc:r forwarded to a specific port and accessible from the
// host machine via WSL:
const provider = new WSLHostnameClientProvider(57421);
const host = await provider.provide();

// Determine whether we're in a WSL or normal Windows environment and choose from
// the above two options automatically:
const provider = new ContextualWindowsOrWSLClientProvider(57421);
const host = await provider.provide();
```

# CLI Tool

This package includes a CLI tool for displaying the web api uri.

## Running the CLI

The CLI tool can only be run if you have this repository's sources downloaded.
It's not distributed with the library itself.

```sh
npm run cli display
```

Outputs:

```
http://127.0.0.1:54207
```
