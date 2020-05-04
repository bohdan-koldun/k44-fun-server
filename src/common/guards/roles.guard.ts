
import { CanActivate, ExecutionContext, Injectable, Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly reflector: Reflector,
  ) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user || {};
    const userRoles = request.user.roles || [];

    const hasRole = userRoles.some(userRole => roles.includes(userRole));

    return user && hasRole;
  }
}
