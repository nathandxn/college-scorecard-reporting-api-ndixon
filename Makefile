## set variables
BIN?=$(shell pwd)/.bin
ARCH?=$(shell uname -m)
OS?=$(shell uname -s | tr A-Z a-z)

## Tooling versions
GITLEAKS_V?=8.23.3

ifeq ($(ARCH), x86_64)
	GITLEAKS_TARGET_ARCH := x64
else ifeq ($(ARCH), x86_32)
	GITLEAKS_TARGET_ARCH := x32
else
	GITLEAKS_TARGET_ARCH := $(ARCH)
endif

.PHONY: lint
lint: ## Run linters
	npm run lint

.PHONY: install-tools
install-tools: ## Install tooling required for local development
ifndef CI
	npm clean-install
endif
	mkdir -p ${BIN}
	curl -sSfL 'https://github.com/gitleaks/gitleaks/releases/download/v${GITLEAKS_V}/gitleaks_${GITLEAKS_V}_${OS}_${GITLEAKS_TARGET_ARCH}.tar.gz' | tar -xz -C ${BIN}
