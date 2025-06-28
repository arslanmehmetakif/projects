import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, departmentId, role } = body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return Response.json({ error: 'Bu e-posta zaten kayıtlı.' }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // gerçek projede şifre hashlenmeli
        role: role || 'PATIENT',
        departmentId: Number(departmentId) || null,
      },
    });

    return Response.json({ success: true, user });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Kayıt sırasında bir hata oluştu.' }, { status: 500 });
  }
}
