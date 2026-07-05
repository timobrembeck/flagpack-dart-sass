# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project uses [SemVer](https://semver.org/) (`MAJOR.MINOR.PATCH`).

## [Unreleased]

### Changed

- **Breaking:** [#15] Migrate to the Sass module system (`@use`) by @RobinvanderVliet.
  Variable overrides must now be passed via `@use ".../variables" with (...)`;
  defining them before an `@import` no longer has any effect (see the SASS
  section in the README).
- [#16] Update the Syrian flag to the new design adopted in December 2024 by @RobinvanderVliet

### Added

- [#17] Add Romani flag (`rom`) by @RobinvanderVliet
- [#18] Add Sámi flag (`smi`) by @RobinvanderVliet

Compare changes: [v1.5.1 → Unreleased](https://github.com/timobrembeck/flagpack-dart-sass/compare/v1.5.1...HEAD)

## [v1.5.1] - 2024-09-14

### Fixed

- Fix package metadata

Compare changes: [v1.5.0 → v1.5.1](https://github.com/timobrembeck/flagpack-dart-sass/compare/v1.5.0...v1.5.1)

## [v1.5.0] - 2024-09-14

### Added

- [#9] Add new flag for German (Easy) by @MizukiTemma
- [#11] Add Esperanto flag by @RobinvanderVliet

### Fixed

- [#12] Update Mauritanian flag by @RobinvanderVliet

Compare changes: [v1.4.0 → v1.5.0](https://github.com/timobrembeck/flagpack-dart-sass/compare/v1.4.0...v1.5.0)

## [v1.4.0] - 2022-10-02

### Fixed

- [#2] Rename `fa` flag to `fs` to fix name collisions with FontAwesome
- [#4] Fix alignment of the Solomon Islands flag

Compare changes: [v1.3.0 → v1.4.0](https://github.com/timobrembeck/flagpack-dart-sass/compare/v1.3.0...v1.4.0)

## [v1.3.0] - 2022-09-11

### Changed

- Make non-political flags independent from the used font

Compare changes: [v1.2.0 → v1.3.0](https://github.com/timobrembeck/flagpack-dart-sass/compare/v1.2.0...v1.3.0)

## [v1.2.0] - 2022-05-24

### Added

- Add non-political flags for Arabic and Persian

Compare changes: [v1.1.0 → v1.2.0](https://github.com/timobrembeck/flagpack-dart-sass/compare/v1.1.0...v1.2.0)

## [v1.1.0] - 2021-07-02

Initial release of `flagpack-dart-sass`, a standalone fork of
[jackiboy/flagpack](https://github.com/jackiboy/flagpack).

### Changed

- Drop deprecated `node-sass` in favor of `dart-sass`
- Fix deprecation warning of `/` division in Sass

Compare changes: [v1.0.5 → v1.1.0](https://github.com/timobrembeck/flagpack-dart-sass/compare/v1.0.5...v1.1.0)
